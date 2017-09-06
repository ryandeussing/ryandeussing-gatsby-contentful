import React, { Component } from 'react';

import Confetti from 'react-dom-confetti';

const config = {
  angle: 90,
  spread: 60,
  startVelocity: 20,
  elementCount: 40,
  decay: 0.95
};

const slowClick = (setLoading) => () => {
  setLoading(true);
  setTimeout(() => setLoading(false), 10);
};

export default ({ confettiConfig, isLoading, setLoading }) => {
  return (
    <span
      className="confetti"
      onClick={ slowClick(setLoading) }
    >
      <Confetti
        className="loading-button__confetti"
        active={ !isLoading }
        config={ config }
      />

      succeed
    </span>
  );
}