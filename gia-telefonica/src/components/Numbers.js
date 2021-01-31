import React from 'react'

const Person = ({ name }) => {
  return <li>{name}</li>
}

const Numbers = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <Person key={person.name} name={person.name} />
      ))}
    </ul>
  )
}

export default Numbers
