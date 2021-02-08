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

  const updateNumber = (id, newObject) => {
    personsServices
      .updateNum({ id, newObject })
      .then((updatedPerson) => {
        const newAllPersons = allPersons.map((person) =>
          person.id === updatedPerson.id ? updatedPerson : person
        )
        setAllPersons(newAllPersons)
      })
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
    const personFound = allPersons.find((element) => element.name === newName)

    personFound ? updateNumber(personFound.id, newObject) : createNumber(newObject)
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
