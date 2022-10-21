// import { FeedbackButtonsStyle } from 'components/FeedbackOptions/FeedbackOptions.styled';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(key => (
    <button key={key} type="button" onClick={() => onLeaveFeedback(key)}>
      {key}
    </button>
  ));
};
