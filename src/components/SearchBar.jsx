import React from 'react'
import '../styles/SearchBar.css'

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search patients by name or ID..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search patients"
      />
      <span className="search-icon">🔍</span>
    </div>
  )
}

export default SearchBar
