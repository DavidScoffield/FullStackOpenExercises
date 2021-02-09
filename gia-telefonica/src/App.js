import React, { useEffect, useState } from 'react'

import ErrorNotification from './components/ErrorNotification'
import Filter from './components/Filter'
import Numbers from './components/Numbers'
import PersonForm from './components/PersonForm'

import personsServices from './services/persons'

const App = () => {
  const [allPersons, setAllPersons] = useState([])
  const [personsFiltered, setPersonsFiltered] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newSearch, setNewSearch] = useState('')
  const [errorNotification, setNewErrorNotification] = useState('')

  // let personsFiltered = allPersons.filter((person) =>
  //   person.name.toLowerCase().includes(newSearch.toLowerCase())
  // )
  useEffect(() => {
    personsServices.all().then((pers) => setAllPersons(pers))
  }, [])

  useEffect(() => {
    const filtered = allPersons.filter((person) =>
      person.name.toLowerCase().includes(newSearch.toLowerCase())
    )
    setPersonsFiltered(filtered)
  }, [allPersons, setPersonsFiltered, newSearch])

  return (
    <div>
      <h2>Phonebook</h2>
      {errorNotification && <ErrorNotification message={errorNotification} />}
      <Filter newSearch={newSearch} setNewSearch={setNewSearch} />
      <h2>Add a new</h2>
      <PersonForm
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        newName={newName}
        setNewName={setNewName}
        allPersons={allPersons}
        setAllPersons={setAllPersons}
        setNewErrorNotification={setNewErrorNotification}
      />
      <h2>Numbers</h2>
      <Numbers
        personsFiltered={personsFiltered}
        setPersonsFiltered={setPersonsFiltered}
        allPersons={allPersons}
        setAllPersons={setAllPersons}
      />
    </div>
  )
}

export default App
