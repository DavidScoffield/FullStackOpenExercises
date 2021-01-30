import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// Functions
const sumNumbers = (nums) => nums.reduce((a, b) => a + b, 0)

const avg = (nums) => sumNumbers(nums) / nums.length

// Components
const Title = ({ text }) => <p className='title'>{text}</p>

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const Statistic = ({ text, value }) => (
  <p className='statistic'>
    {text} {value}
  </p>
)

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <Title text='statistics'></Title>
      {sumNumbers([good, neutral, bad]) === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <Statistic text='good' value={good} />
          <Statistic text='neutral' value={neutral} />
          <Statistic text='bad' value={bad} />
          <Statistic text='all' value={sumNumbers([good, neutral, bad])} />
          <Statistic text='average' value={avg([good, neutral, bad])} />
        </>
      )}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title text='give feedback' />
      <Button text='good' handleClick={() => setGood(good + 1)} />
      <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
      <Button text='bad' handleClick={() => setBad(bad + 1)} />

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
