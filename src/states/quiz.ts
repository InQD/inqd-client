import store from 'store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '.'

export interface QuizState {
  todayQuiz: number[]
}

const INITIAL_STATE: QuizState = {
  todayQuiz: store.get('inqd.quiz.todayQuiz') || [],
}

const quizSlice = createSlice({
  name: 'quiz',
  initialState: INITIAL_STATE,
  reducers: {
    setTodayQuiz: (state: QuizState, action: PayloadAction<number[]>) => {
      state.todayQuiz = action.payload
      store.set('inqd.quiz.todayQuiz', state.todayQuiz)
    },
  },
})

export const { setTodayQuiz } = quizSlice.actions

export default quizSlice.reducer

// Selector =======================

export const getTodayQuiz = (state: RootState): number[] => state.quiz.todayQuiz
