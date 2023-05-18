import { Statistic } from './Statistic/Statistic';
import { useState } from 'react';
import { Section } from './Section/Section'
import {Notification} from './Notification/Notification'

export const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
const total = feedback.good + feedback.neutral + feedback.bad
  return (
    <div>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {/* React homework template */}
      </div>
      

      


      <Section title="Please leave feedback"></Section>
      
<button
        onClick={() => setFeedback({ ...feedback, good: feedback.good + 1 })}
      >
        Good
      </button>
      <button
        onClick={() =>
          setFeedback({ ...feedback, neutral: feedback.neutral + 1 })
        }
      >
        Neutral
      </button>
      <button
        onClick={() => setFeedback({ ...feedback, bad: feedback.bad + 1 })}
      >
        Bad
      </button>

      {total ? <Statistic feedback={feedback} setFeedback={setFeedback}></Statistic> : <Notification message="There is no feedback"></Notification>}
    </div>
  );
};
