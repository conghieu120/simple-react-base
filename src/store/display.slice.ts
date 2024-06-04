import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  theme: 'light',
  isMenuOpen: true,
}

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen
    },
    changeTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { changeTheme, toggleMenu } = displaySlice.actions

export default displaySlice.reducer
