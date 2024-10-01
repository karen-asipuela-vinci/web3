import "./App.css";
import React, { useState } from "react";
import Buttons from "./components/Buttons";
import StatisticLine from "./components/StatisticLine";

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;
  return (
    <table>
      <tbody>
      <StatisticLine text="Good" value={good}/>
      <StatisticLine text="Neutral" value={neutral}/>
      <StatisticLine text="Bad" value={bad}/>
      <StatisticLine text="Average" value={average}/>
      <StatisticLine text="Positive" value={positive}/>
      </tbody>
    </table>
  );
};

const App = () => {
 
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (type) => {
      if (type === 'good') {
          setGood(good + 1);
      } else if (type === 'neutral') {
          setNeutral(neutral + 1);
      } else if (type === 'bad') {
          setBad(bad + 1);
      }
    };

  return (
    <div>
      <h1>Give feedback</h1>
      <Buttons type="good" onClick={() => handleClick("good")} />
      <Buttons type="neutral" onClick={() => handleClick("neutral")} />
      <Buttons type="bad" onClick={() => handleClick("bad")} />
      <h1>Statistics</h1>
      {good || neutral || bad ? (
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
    };

export default App;
