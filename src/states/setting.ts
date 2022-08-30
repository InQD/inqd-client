import store from 'store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '.'

export interface SettingState {
  searchValue: string
  todayPersonalNum: number
  todayTechNum: number
  timerToggle: boolean
  timerTime: number
}

const INITIAL_STATE: SettingState = {
  searchValue: '',
  todayPersonalNum: store.get('inqd.setting.todayPersonal') || 2,
  todayTechNum: store.get('inqd.setting.todayTech') || 3,
  timerToggle: store.get('inqd.setting.timerToggle') || false,
  timerTime: store.get('inqd.setting.timerTime') || 90,
}

const settingSlice = createSlice({
  name: 'setting',
  initialState: INITIAL_STATE,
  reducers: {
    setSearchValue: (state: SettingState, action: PayloadAction<string>) => {
      const newSearchValue = action.payload
      state.searchValue = newSearchValue
    },

    setTodayPersonalNum: (state: SettingState, action: PayloadAction<number>) => {
      state.todayPersonalNum = action.payload
      store.set('inqd.setting.todayPersonal', state.todayPersonalNum)
    },

    setTodayTechNum: (state: SettingState, action: PayloadAction<number>) => {
      state.todayTechNum = action.payload
      store.set('inqd.setting.todayTech', state.todayTechNum)
    },

    setTimerToggle: (state: SettingState, action: PayloadAction<boolean>) => {
      state.timerToggle = action.payload
      store.set('inqd.setting.timerToggle', state.timerToggle)
    },

    setTimerTime: (state: SettingState, action: PayloadAction<number>) => {
      state.timerTime = action.payload
      store.set('inqd.setting.timerTime', state.timerTime)
    },
  },
})

export const { setSearchValue, setTodayPersonalNum, setTodayTechNum, setTimerToggle, setTimerTime } =
  settingSlice.actions

export default settingSlice.reducer

// Selector =======================

export const getSearchValue = (state: RootState): string => state.setting.searchValue
export const getTodayPersonalNum = (state: RootState): number => state.setting.todayPersonalNum
export const getTodayTechNum = (state: RootState): number => state.setting.todayTechNum
export const getTimerToggle = (state: RootState): boolean => state.setting.timerToggle
export const getTimerTime = (state: RootState): number => state.setting.timerTime
