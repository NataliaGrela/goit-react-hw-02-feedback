import { Statistic } from './Statistic/Statistic';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const total = Object.values(feedback).reduce((acc, value) => acc + value, 0);

  const handleButtonClick = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const buttonsConfig = [
    { label: 'Good', type: 'good' },
    { label: 'Neutral', type: 'neutral' },
    { label: 'Bad', type: 'bad' },
  ];

  const buttons = buttonsConfig.map(button => (
    <button
      key={button.type}
      className="btn"
      onClick={() => handleButtonClick(button.type)}
    >
      {button.label}
    </button>
  ));

  return (
    <div className="container">
      <Section title="Please leave feedback"></Section>
      <div>{buttons}</div>
      {total ? (
        <Statistic feedback={feedback} setFeedback={setFeedback}></Statistic>
      ) : (
        <Notification message="There is no feedback"></Notification>
      )}
    </div>
  );
};
