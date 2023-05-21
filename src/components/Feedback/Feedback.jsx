import PropTypes from 'prop-types';

export const Feedback = ({ feedback }) => {
  const { good, neutral, bad } = feedback;
  const total = good + neutral + bad;
  const totalPositiveFeedback =
    total > 0 ? ((good / total) * 100).toFixed(1) + '%' : '0%';

  return (
    <>
      <p>Total: {total}</p>
      <p>Positive feedback: {totalPositiveFeedback}</p>
    </>
  );
};

Feedback.propTypes = {
  feedback: PropTypes.number.isRequired,
};
