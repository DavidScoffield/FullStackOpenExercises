import React, { useState } from 'react'
import Numbers from './components/Numbers'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)

  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleSearchChange = (event) => setNewSearch(event.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    const newObject = {
      name: newName,
      number: newNumber,
    }
    persons.find((element) => element.name === newName)
      ? alert(`${newName} already exist`)
      : setPersons(persons.concat(newObject))
    setNewName('')
    setNewNumber('')
  }

  // console.log(persons[0].name.toLowerCase())

  let personsFiltered = persons.filter((person) =>
    person.name.toLowerCase().includes(newSearch.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        fliter show with: <input value={newSearch} onChange={handleSearchChange} />
      </div>
      <h2>Add a new</h2>
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
      <h2>Numbers</h2>
      <Numbers persons={personsFiltered} />
    </div>
  )
}

export default App
