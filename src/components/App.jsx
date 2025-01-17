import { useEffect, useState } from 'react';
import './App.css';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';

function App() {
  const initReviews = () => ({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  // localStorage.removeItem('reviews');

  const [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem('reviews')) ?? initReviews()
  );

  const totalFeedback = Object.values(reviews).reduce(
    (prev, cur) => (prev += cur)
  );

  const updateFeedback = reviewType => {
    setReviews(prev => ({
      ...prev,
      [reviewType]: prev[reviewType] + 1,
    }));
  };

  const resetFeedback = () => {
    setReviews(prev =>
      Object.fromEntries(Object.keys(prev).map(reviewType => [reviewType, 0]))
    );
  };

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  return (
    <div className="reviews-container">
      <Description />
      <Options
        reviews={reviews}
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback reviews={reviews} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
