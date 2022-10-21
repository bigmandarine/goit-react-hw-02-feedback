export const Statistic = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  const total = countTotalFeedback();
  const percent = countPositiveFeedbackPercentage();
  return (
    <div>
      <p>Statistics:</p>
      <ul>
        <li>
          Good:<span>{good}</span>
        </li>
        <li>
          Netural:<span>{neutral}</span>
        </li>
        <li>
          Bad:<span>{bad}</span>
        </li>
        <li>
          Total:
          <span>{total}</span>
        </li>
        <li>
          Positive feedback:
          <span>{percent}%</span>
        </li>
      </ul>
    </div>
  );
};
