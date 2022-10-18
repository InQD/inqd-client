import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './search.module.scss'

import { setSearchValue } from 'states/setting'

import { DeleteAllIcon, SearchIcon } from 'assets/svgs'

const Search = () => {
  const searchInput = useRef<HTMLInputElement>(null)
  const [searchText, setSearchText] = useState('')
  const dispatch = useDispatch()

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value)
  }

  const handleClickReset = () => {
    setSearchText('')
    if (!searchInput.current) return
    searchInput.current.focus()
  }

  useEffect(() => {
    dispatch(setSearchValue(searchText))
  }, [dispatch, searchText])

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
