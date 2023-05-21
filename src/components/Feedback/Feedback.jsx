import PropTypes from 'prop-types';

export const Feedback = ({ feedback }) => {
  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  return (
    <>
      <p>Total: {total}</p>
      <p>
        Positive feedback: {total > 0 ? ((good / total) * 100).toFixed(1) : 0}%
      </p>
    </>
  );
};

Feedback.propTypes = {
  feedback: PropTypes.number.isRequired,
};
