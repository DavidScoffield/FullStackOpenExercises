import React from 'react'

import personsServices from '../services/persons'

const PersonForm = ({ newNumber, newName, persons, setNewName, setNewNumber, setPersons }) => {
  const handleNameChange = (event) => setNewName(event.target.value)

  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newObject = {
      name: newName,
      number: newNumber,
    }
    persons.find((element) => element.name === newName)
      ? alert(`${newName} already exist`)
      : personsServices
          .create(newObject)
          .then((newObj) => setPersons(persons.concat(newObj)))
          .catch((error) => console.log('ERROR', error))
    setNewName('')
    setNewNumber('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

export default PersonForm
