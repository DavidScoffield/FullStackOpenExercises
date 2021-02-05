import React from 'react'

import personsServices from '../services/persons'

const PersonForm = ({
  newNumber,
  newName,
  allPersons,
  setNewName,
  setNewNumber,
  setAllPersons,
}) => {
  const handleNameChange = (event) => setNewName(event.target.value)

  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const createNumber = (newObject) => {
    personsServices
      .create(newObject)
      .then((newObj) => setAllPersons(allPersons.concat(newObj)))
      .catch((error) => {
        const msg = error.response.data.error
        console.log('ERROR//', msg)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newObject = {
      name: newName,
      number: newNumber,
    }
    allPersons.find((element) => element.name === newName)
      ? alert(`${newName} already exist`)
      : createNumber(newObject)
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
