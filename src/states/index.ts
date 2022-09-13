import { configureStore } from '@reduxjs/toolkit'

import setting from './setting'
import quiz from './quiz'

export const store = configureStore({
  reducer: {
    setting,
    quiz,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
