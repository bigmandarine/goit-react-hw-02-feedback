import PropTypes from 'prop-types';
import { NotificationStyle } from './Notification.styled';
export const NotificationMessage = ({ message }) => {
  return <NotificationStyle>{message}</NotificationStyle>;
};

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
