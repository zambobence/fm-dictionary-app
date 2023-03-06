import React from 'react'
import SearchIcon from '../assets/images/icon-search.svg'

function SearchForm({searchTerm, setSearchTerm, toggleFetch, error}) {
  return (
    <form className='container'>
      <div className={error ? 'error search-input-container flex' : 'search-input-container flex'}>
      <input className='search-input' type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Search for any word…'/>
      <button 
        onClick={(e) =>{e.preventDefault()
                        toggleFetch()}
        } 
        aria-label='search'>
        <img src={SearchIcon} alt='search icon' className='icon' />
      </button>
      </div>
      {error ? <p className='error-msg'>Whoops can't be empty...</p> : null}
    </form>
  )
}

export default SearchForm