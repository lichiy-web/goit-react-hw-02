import { useEffect, useState } from 'react';
import './App.css';
import clsx from 'clsx';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';
import ColorSchemeSwitch from './ColorSchemeSwitch/ColorSchemeSwitch';

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

  const [isDarkScheme, setIsDarkScheme] = useState(
    JSON.parse(localStorage.getItem('isDarkScheme')) ?? false
  );

  const totalFeedback = Object.values(reviews).reduce(
    (prev, cur) => (prev += cur)
  );

  const positiveFeedback = Math.round((100 * reviews.good) / totalFeedback);

  const updateFeedback = reviewType => {
    setReviews(prev => ({
      ...prev,
      [reviewType]: prev[reviewType] + 1,
    }));
  };

  const resetFeedback = () => {
    setReviews(() => initReviews());
  };

  const toggleColorScheme = () => setIsDarkScheme(prev => !prev);

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem('isDarkScheme', JSON.stringify(isDarkScheme));
  }, [isDarkScheme]);

  return (
    <div className={clsx('main-background', { isDarkScheme: isDarkScheme })}>
      <div className={clsx('reviewsContainer', { isDarkScheme: isDarkScheme })}>
        <ColorSchemeSwitch
          isDarkScheme={isDarkScheme}
          toggleColorScheme={toggleColorScheme}
        />
        <Description />
        <Options
          reviews={reviews}
          totalFeedback={totalFeedback}
          updateFeedback={updateFeedback}
          resetFeedback={resetFeedback}
          isDarkScheme={isDarkScheme}
        />
        {totalFeedback > 0 ? (
          <Feedback
            reviews={reviews}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        ) : (
          <Notification />
        )}
      </div>
    </div>
  );
}

export default App;
