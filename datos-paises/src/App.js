import React, { useEffect, useState } from 'react'
import Form from './components/Form'
import Results from './components/Results'

import axios from 'axios'

const App = () => {
  const [search, setNewSearch] = useState('')
  const [allCountries, setNewAllCountries] = useState([])
  const [countriesFiltered, setNewCountriesFiltered] = useState([])

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(({ data }) => {
      setNewAllCountries(data)
    })
  }, [])

  useEffect(() => {
    const filtered = allCountries.filter((country) =>
      country.name.toUpperCase().includes(search.toUpperCase())
    )
    setNewCountriesFiltered(filtered)
  }, [search, allCountries])

  return (
    <>
      <Form search={search} setNewSearch={setNewSearch} />
      <Results countries={countriesFiltered} setNewCountriesFiltered={setNewCountriesFiltered} />
    </>
  )
}

export default App
