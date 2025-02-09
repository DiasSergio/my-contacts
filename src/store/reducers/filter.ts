import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FilterState = {
  termo?: string
}

const initialState: FilterState = {
  termo: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { changeTermo } = filterSlice.actions
export default filterSlice.reducer
