// import PropTypes from 'prop-types';
// import { useState } from 'react';
// import css from './Feedback.module.css';

export const Feedback = ({ feedback }) => {
  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  return (
    <>

    
      <p>Total: {total}</p>
      <p>
        Positive feedback: {total > 0 ? ((good / total) * 100).toFixed(2) : 0}%
      </p>

      
    </>
  );
};
