import { Feedback } from 'components/Feedback/Feedback';
import PropTypes from 'prop-types';
import { useState } from 'react';
import css from './Statistic.module.css';

export const Statistic = ({ feedback}) => {
  return (
    <>
      {/* <h3>Please leave feedback</h3> */}
      
      <h3>Statistic</h3>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <Feedback feedback={feedback}></Feedback>
    
    </>
  );
};
