import React from 'react';

const alert = (props) => {
  const { type, message } = props.alert;
  return (
    <div className={`alert alert-${type}`}>{message}</div>
  );
}

export default alert
