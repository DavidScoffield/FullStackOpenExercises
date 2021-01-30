import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// Functions
const sumNumbers = (nums) => nums.reduce((a, b) => a + b, 0)

const avg = (nums) => {
  console.log(nums)
  return sumNumbers(nums) / nums.length
}

// Components
const Title = ({ text }) => <p>{text}</p>

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ good, neutral, bad }) => {
  return (
    <>
      <Title text='statistics' />
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>
      <p>All {sumNumbers([good, neutral, bad])} </p>
      <p>Average {avg([good, neutral, bad])} </p>
    </>
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
