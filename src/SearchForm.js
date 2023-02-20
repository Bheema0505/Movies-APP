import React from 'react'
import { useGlobalContext } from './context'
import { SearchFormErrorDivTag, SearchFormInputTag, SearchFormTag } from './SearchFormStyles'
const SearchForm = () => {
  const { query, setQuery, error } = useGlobalContext()
  return (
    <SearchFormTag onSubmit={(e) => e.preventDefault()}>
      <h3>search movies</h3>
      <SearchFormInputTag
        type='text '
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {error.show && <SearchFormErrorDivTag>{error.msg}</SearchFormErrorDivTag>}
    </SearchFormTag>
  )
}

export default SearchForm
