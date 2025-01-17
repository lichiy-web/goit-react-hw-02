import css from './Options.module.css';

// import React from 'react'

const Options = ({ reviews, totalFeedback, updateFeedback, resetFeedback }) => {
  return (
    <div className={css.optionsContainer}>
      {Object.keys(reviews).map(reviewType => {
        return (
          <button
            key={reviewType}
            className={'btn' + reviewType.replace(/^./i, s => s.toUpperCase())}
            onClick={() => updateFeedback(reviewType)}
          >
            {reviewType}
          </button>
        );
      })}

      {totalFeedback > 0 && (
        <button className={css.btnReset} onClick={() => resetFeedback()}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
