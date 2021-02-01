import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'

import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')

  let personsFiltered = persons.filter((person) =>
    person.name.toLowerCase().includes(newSearch.toLowerCase())
  )

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(({ data }) => {
      setPersons(data)
    })
  }, [])

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
