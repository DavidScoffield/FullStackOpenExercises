import React from 'react'

import personsServices from '../services/persons'

const Person = ({ name, number }) => {
  return (
    <li>
      {name} {number}
    </li>
  )
}

const Numbers = ({ personsFiltered, setPersonsFiltered, setAllPersons, allPersons }) => {
  const deleteNumber = (person) => {
    const confirmation = window.confirm(`Delete ${person.name}?`)
    if (confirmation) {
      personsServices.deleteNum(person.id).then(() => {
        const filtered = personsFiltered.filter((pers) => pers.id !== person.id)
        const allPersonsWithoutDeletedPerson = allPersons.filter((pers) => pers.id !== person.id)
        setPersonsFiltered(filtered)
        setAllPersons(allPersonsWithoutDeletedPerson)
      })
    }
  }
  return (
    <ul>
      {personsFiltered.map((person) => (
        <div key={person.id}>
          <Person name={person.name} number={person.number} />
          <button onClick={() => deleteNumber(person)}>Delete </button>
        </div>
      ))}
    </ul>
  )
}

export default Numbers
