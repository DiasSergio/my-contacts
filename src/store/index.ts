import { configureStore } from '@reduxjs/toolkit'
import contactReducer from './reducers/contactsReducer'
import filterReducer from './reducers/filter'

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filterReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
