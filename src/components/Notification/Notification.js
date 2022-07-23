import React from 'react';
import propTypes from 'prop-types';
import { Notifications } from './NotificationStyled';

const Notification = ({ message }) => {
  return (
    <Notifications>
      <p>{message}</p>
    </Notifications>
  );
};

export default Notification;

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

