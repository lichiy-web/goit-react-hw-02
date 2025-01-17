import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

import css from './Feedback.module.css';
import clsx from 'clsx';

const Feedback = ({ reviews, totalFeedback }) => {
  const positiveFeedback = Math.round((100 * reviews.good) / totalFeedback);
  const transparency = 0.5;
  const data = {
    labels: Object.keys(reviews),
    datasets: [
      {
        label: 'Customer Feedback',
        data: Object.values(reviews),
        backgroundColor: [
          `rgba(18, 198, 90, ${transparency})`,
          `rgba(54, 162, 235, ${transparency})`,
          `rgba(255, 99, 132, ${transparency})`,
          `rgba(255, 206, 86, ${transparency})`,
          `rgba(153, 102, 255, ${transparency})`,
          `rgba(255, 159, 64, ${transparency})`,
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
        hoverOffset: 10,
      },
    ],
  };

  return (
    <div className={css.feedbackContainer}>
      <div className={clsx(css.feedbackItem, css.valueContainer)}>
        {Object.entries(reviews).map(([reviewType, votes]) => {
          return (
            <div
              key={reviewType}
              className={clsx(css.reviewItem, css[reviewType])}
            >
              {reviewType}: {votes}
            </div>
          );
        })}

        <div className={clsx(css.reviewItem, css.total)}>
          Total: {totalFeedback}
        </div>
        <div className={clsx(css.reviewItem, css.positive)}>
          Positive: {positiveFeedback}%
        </div>
      </div>
      <div className={clsx(css.feedbackItem, css.chartContainer)}>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default Feedback;
