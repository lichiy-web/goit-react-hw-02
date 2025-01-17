import css from './Feedback.module.css';

// import React from 'react'

const Feedback = ({ reviews }) => {
  const total = Object.values(reviews).reduce((prev, cur) => (prev += cur));
  const totalPositive = reviews.good / total;

  return (
    <div className={css.feedbackContainer}>
      {Object.entries(reviews).map(([reviewType, votes]) => {
        return (
          <div
            key={reviewType}
            className={
              css['reviews' + reviewType.replace(/^./i, s => s.toUpperCase())]
            }
          >
            {reviewType}: {votes}
          </div>
        );
      })}

      <div className={css.reviewsTotal}>Total: {total}</div>
      <div className={css.totalPositive}>Positive: {'80%'}</div>
    </div>
  );
};

export default Feedback;
