import React from "react";
import propTypes from "prop-types";

const message ="There is no feedback"

const Notification = ({ message }) => {
    return <div className="notification">{message}</div>;
    }

export default Notification;

Notification.propTypes = {
    message: propTypes.string.isRequired;
}