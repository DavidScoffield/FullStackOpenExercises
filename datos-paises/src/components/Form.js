import React from 'react'

const Form = ({ search, setNewSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleChange = (event) => {
    setNewSearch(event.target.value)
  }

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
