import PropTypes from 'prop-types';
import { StatisticListStyle } from './Statistic.styled';
export const Statistic = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <StatisticListStyle>
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
        <span>{countTotalFeedback}</span>
      </li>
      <li>
        Positive feedback:
        <span>{countPositiveFeedbackPercentage}%</span>
      </li>
    </StatisticListStyle>
  );
};
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};
