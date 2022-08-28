import { ChangeEvent, useRef, useState } from 'react'
import styles from './search.module.scss'

import { DeleteAllIcon, SearchIcon } from 'assets/svgs'

interface IProps {}

const Search = () => {
  const searchInput = useRef<HTMLInputElement>(null)
  const [searchText, setSearchText] = useState('')

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value)
  }

  const handleClickReset = () => {
    setSearchText('')
    searchInput.current?.focus()
  }
  return (
    <div className={styles.searchBox}>
      <SearchIcon />
      <input type='text' value={searchText} ref={searchInput} onChange={handleChangeSearch} />
      <button type='button' onClick={handleClickReset}>
        <DeleteAllIcon />
      </button>
    </div>
  )
}

export default Search
