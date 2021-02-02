import React from 'react'

import '../styles/results.css'

const ManyMatches = () => <p>Too many matches, specify another filter</p>

const ListOfCountries = ({ countries, setNewCountriesFiltered }) => {
  const handleShowClick = (country) => {
    setNewCountriesFiltered([country])
  }

  return (
    <ul>
      {countries.map((country) => {
        return (
          <li key={country.numericCode}>
            {country.name}
            <button onClick={() => handleShowClick(country)}>Show</button>
          </li>
        )
      })}
    </ul>
  )
}

const CountryDetails = ({ country }) => {
  const { name, capital, population, languages, flag } = country
  const langs = languages.map((language) => language.name)

  return (
    <>
      <h2>{name}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <div>
        <h3>Languages</h3>
        <ul>
          {langs.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      </div>
      <img src={flag} alt='flag'></img>
    </>
  )
}

const Results = ({ countries, setNewCountriesFiltered }) => {
  return (
    <>
      <h2>Resultados</h2>

      {countries.length > 10 ? (
        <ManyMatches />
      ) : countries.length > 1 ? (
        <ListOfCountries countries={countries} setNewCountriesFiltered={setNewCountriesFiltered} />
      ) : countries.length === 1 ? (
        <CountryDetails country={countries[0]} />
      ) : (
        <div>The filter entered does not match any country</div>
      )}
    </>
  )
}

export default Results
