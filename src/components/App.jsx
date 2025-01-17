import { useState } from 'react';
import './App.css';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';

function App() {
  const [reviews, setReviews] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  return (
    <div className="reviews-container">
      <Description />
      <Options reviews={reviews} setReviews={setReviews} />
      <Feedback reviews={reviews} />
    </div>
  );
}

export default App;
