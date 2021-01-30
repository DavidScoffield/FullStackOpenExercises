// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'

// // Functions
// const sumNumbers = (nums) => nums.reduce((a, b) => a + b, 0)

// const avg = (nums) => sumNumbers(nums) / nums.length

// // Components
// const Title = ({ text }) => <p className='title'>{text}</p>

// const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

// const Statistic = ({ text, value }) => (
//   <tr>
//     <td> {text}</td>
//     <td> {value}</td>
//   </tr>
// )

// const Statistics = ({ good, neutral, bad }) => {
//   return (
//     <div>
//       <Title text='statistics'></Title>
//       {sumNumbers([good, neutral, bad]) === 0 ? (
//         <p>No feedback given</p>
//       ) : (
//         <table className='statistic'>
//           <tbody>
//             <Statistic text='good' value={good} />
//             <Statistic text='neutral' value={neutral} />
//             <Statistic text='bad' value={bad} />
//             <Statistic text='all' value={sumNumbers([good, neutral, bad])} />
//             <Statistic text='average' value={avg([good, neutral, bad])} />
//           </tbody>
//         </table>
//       )}
//     </div>
//   )
// }

// const App = () => {
//   // save clicks of each button to its own state
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <Title text='give feedback' />
//       <Button text='good' handleClick={() => setGood(good + 1)} />
//       <Button text='neutral' handleClick={() => setNeutral(neutral + 1)} />
//       <Button text='bad' handleClick={() => setBad(bad + 1)} />

//       <Statistics good={good} bad={bad} neutral={neutral} />
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'))

// ---------------------------------------------------------------------------------------

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

const Button = ({ text, handleClick }) => <button onClick={handleClick}>{text}</button>

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const handleClick = () => {
    const random = getRandomInt(0, props.anecdotes.length)
    console.log('click', random)
    setSelected(random)
  }

  return (
    <>
      <div>{props.anecdotes[selected]}</div>
      <Button handleClick={handleClick} text='next anecdote' />
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))
