import React, { useState } from 'react'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'

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

  let personsFiltered = persons.filter((person) =>
    person.name.toLowerCase().includes(newSearch.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} setNewSearch={setNewSearch} />
      <h2>Add a new</h2>
      <PersonForm
        newNumber={newNumber}
        newName={newName}
        persons={persons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        setPersons={setPersons}
      />
      <h2>Numbers</h2>
      <Numbers persons={personsFiltered} />
    </div>
  )
}

export default App
