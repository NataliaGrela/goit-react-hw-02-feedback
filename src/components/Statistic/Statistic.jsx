import PropTypes from 'prop-types';
import { Feedback } from 'components/Feedback/Feedback';

export const Statistic = ({ feedback }) => {
  return (
    <div>
      <h3>Statistic</h3>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <Feedback feedback={feedback}></Feedback>
    </div>
  );
};

Statistic.propTypes = {
  feedback: PropTypes.number.isRequired,
};
