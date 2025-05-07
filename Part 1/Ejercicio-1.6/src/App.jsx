import React, { useEffect } from 'react';
import { useState } from 'react';

const Statistics = ({ good, neutral, bad, average, percentageGoodVotes }) => {
  if (average === 0 || percentageGoodVotes === 0) {
    return <div>No Feedback Given</div>;
  }
  return (
    <div>
      <h2>Statistics</h2>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Good:</strong>
            </td>
            <td>{good}</td>
          </tr>
          <tr>
            <td>
              <strong>Neutral:</strong>
            </td>
            <td>{neutral}</td>
          </tr>
          <tr>
            <td>
              <strong>Bad:</strong>
            </td>
            <td>{bad}</td>
          </tr>
          <tr>
            <td>
              <strong>Average points:</strong>
            </td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>
              <strong>Percentage of good votes:</strong>
            </td>
            <td>{percentageGoodVotes}%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);
  const [percentageGoodVotes, setPercentageGoodVotes] = useState(0);

  useEffect(() => {
    setAverage(averageCount(good, neutral, bad));
    setPercentageGoodVotes(
      percentageGoodVotesCount(good, good + neutral + bad)
    );
  }, [good, neutral, bad]);

  const averageCount = (good, neutral, bad) => {
    return ((good * 1 + neutral * 0 + bad * -1) / 3).toFixed(2);
  };
  const percentageGoodVotesCount = (good, total) => {
    if (total === 0) return 0;
    return ((good / total) * 100).toFixed(2);
  };

  return (
    <div>
      <h1>Feedback System</h1>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => setGood((prevGood) => prevGood + 1)}>
          Good
        </button>
        <button onClick={() => setNeutral((prevNeutral) => prevNeutral + 1)}>
          Neutral
        </button>
        <button onClick={() => setBad((prevBad) => prevBad + 1)}>Bad</button>
      </div>
      <br />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        average={average}
        percentageGoodVotes={percentageGoodVotes}
      />
    </div>
  );
};

export default App;
