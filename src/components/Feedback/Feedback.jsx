import css from './Feedback.module.css';

const Feedback = ({ reviews, totalFeedback }) => {
  const positiveFeedback = Math.round((100 * reviews.good) / totalFeedback);

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

      <div className={css.reviewsTotal}>Total: {totalFeedback}</div>
      <div className={css.positiveFeedback}>Positive: {positiveFeedback}%</div>
    </div>
  );
};

export default Feedback;
