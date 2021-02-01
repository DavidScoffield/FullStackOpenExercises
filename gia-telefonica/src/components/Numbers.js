import React from 'react'

const Person = ({ name, number }) => {
  return (
    <li>
      {name} {number}
    </li>
  )
}

const Numbers = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <Person key={person.id} name={person.name} number={person.number} />
      ))}
    </ul>
  )
}

export default Numbers
