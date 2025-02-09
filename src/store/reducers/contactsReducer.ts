import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contact from '../../models/Task'

type ContactState = {
  contacts: Contact[]
}

const initialState: ContactState = {
  contacts: [
    {
      id: 1,
      name: 'Joao Maria',
      tel: '55999999999',
      email: 'joao@gmail.com'
    },
    {
      id: 2,
      name: 'Maria Joao',
      tel: '55999999998',
      email: 'Maria@gmail.com'
    },
    {
      id: 3,
      name: 'Jose Maria',
      tel: '55999999997',
      email: 'Jose@gmail.com'
    }
  ]
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter((c) => c.id !== action.payload)
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.contacts.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.contacts[contactIndex] = action.payload
      }
    },
    addNewContact: (state, action: PayloadAction<Contact>) => {
      const checkExistentContact = state.contacts.find(
        (c) => c.name.toLowerCase() === action.payload.name.toLowerCase()
      )

      if (checkExistentContact || !action.payload.name) {
        alert('Please enter a valid contact!')
      } else {
        const lastContact = state.contacts[state.contacts.length - 1]

        const newContact = {
          ...action.payload,
          id: lastContact ? lastContact.id + 1 : 1
        }
        state.contacts.push(newContact)
      }
    }
  }
})

export const { remove, edit, addNewContact } = contactsSlice.actions

export default contactsSlice.reducer
