import { Statistic } from './Statistic/Statistic';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const total = feedback.good + feedback.neutral + feedback.bad;
  return (
    <div className="container">
      <Section title="Please leave feedback"></Section>
      <div>
        <button
          className="btn"
          onClick={() => setFeedback({ ...feedback, good: feedback.good + 1 })}
        >
          Good
        </button>
        <button
          className="btn"
          onClick={() =>
            setFeedback({ ...feedback, neutral: feedback.neutral + 1 })
          }
        >
          Neutral
        </button>
        <button
          className="btn"
          onClick={() => setFeedback({ ...feedback, bad: feedback.bad + 1 })}
        >
          Bad
        </button>
      </div>
      {total ? (
        <Statistic feedback={feedback} setFeedback={setFeedback}></Statistic>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};
