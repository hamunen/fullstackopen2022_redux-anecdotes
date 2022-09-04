import { createSlice } from "@reduxjs/toolkit"

const initialState = 'Hello! This is a notification?'

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      state = action.payload
    }
  }
})

export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer