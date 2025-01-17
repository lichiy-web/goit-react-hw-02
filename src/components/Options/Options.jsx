import css from './Options.module.css';

// import React from 'react'

const Options = ({ reviews, setReviews }) => {
  const total = Object.values(reviews).reduce((prev, cur) => (prev += cur));

  return (
    <div className={css.optionsContainer}>
      {Object.keys(reviews).map(reviewType => {
        return (
          <button
            key={reviewType}
            className={'btn' + reviewType.replace(/^./i, s => s.toUpperCase())}
            onClick={() =>
              setReviews({
                ...reviews,
                [reviewType]: reviews[reviewType] + 1,
              })
            }
          >
            {reviewType}
          </button>
        );
      })}

      {total > 0 && (
        <button
          className={css.btnReset}
          onClick={() =>
            setReviews(
              Object.fromEntries(
                Object.keys(reviews).map(revType => [revType, 0])
              )
            )
          }
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
