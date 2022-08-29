import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '.'

export interface SettingState {
  searchValue: string
}

const INITIAL_STATE: SettingState = {
  searchValue: '',
}

const settingSlice = createSlice({
  name: 'setting',
  initialState: INITIAL_STATE,
  reducers: {
    setSearchValue: (state: SettingState, action: PayloadAction<string>) => {
      const newSearchValue = action.payload
      state.searchValue = newSearchValue
    },
  },
})

export const { setSearchValue } = settingSlice.actions

export default settingSlice.reducer

// Selector =======================

export const getSearchValue = (state: RootState): string => state.setting.searchValue
