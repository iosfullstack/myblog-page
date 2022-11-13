import React, {useState} from 'react'

const SearchForm = ({searchTerm}) => {
    const [term, setTerm] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setTerm(term)
        searchTerm(term)
    }

    const handleChange = (e) => {
        setTerm(e.target.value)
    }
  return (
    <form onClick={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="e.g election" />
        <button type="submit">Search</button>
    </form>
  )
}

export default SearchForm