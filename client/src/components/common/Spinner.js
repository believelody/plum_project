import React from 'react';
import spinner from '../../img/spinner.gif';

export default () => (
  <img
    src={spinner}
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: '200px',
      margin: 'auto',
      display: 'block',
    }}
    alt="loading..."
  />
);
