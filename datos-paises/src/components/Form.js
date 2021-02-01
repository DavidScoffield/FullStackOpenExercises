import React from 'react'

const Form = ({ search, setNewSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    setNewSearch(event.target.value)
  }

  // useEffect(() => {
  //   axios
  //     .get(`https://restcountries.eu/rest/v2/name/${search}`)
  //     .then(({ data }) => {
  //       setNewCountries(data)
  //       console.log(data)
  //     })
  //     .catch((e) => {
  //       console.log('dont work', e.response)
  //       setNewCountries([])
  //     })
  // }, [search, setNewCountries])

  return (
    <form onSubmit={handleSubmit}>
      <h3>
        Find countries
        <input value={search} onChange={handleChange} />
      </h3>
    </form>
  )
}

export default Form
