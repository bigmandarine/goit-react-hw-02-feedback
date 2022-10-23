import { FeedbackButtonsStyle } from 'components/FeedbackOptions/FeedbackOptions.styled';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(key => (
    <FeedbackButtonsStyle
      key={key}
      type="button"
      onClick={() => onLeaveFeedback(key)}
    >
      {key}
    </FeedbackButtonsStyle>
  ));
};
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
