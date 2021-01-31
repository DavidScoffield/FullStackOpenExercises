import React from 'react'

const Filter = ({ newSearch, setNewSearch }) => {
  const handleSearchChange = (event) => setNewSearch(event.target.value)

  return (
    <div>
      filter show with: <input value={newSearch} onChange={handleSearchChange} />
    </div>
  )
}

export default Filter
