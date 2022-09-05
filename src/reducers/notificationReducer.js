import { createSlice } from "@reduxjs/toolkit"

const initialState = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    updateNotification(state, action) {
      return action.payload
    }
  }
})

export const { updateNotification } = notificationSlice.actions

export const setNotification = (content, displayTime) => {
  return async (dispatch, getState) => {
    /* if existing notification, clear the timeout */
    const existingNotification = getState().notification    
    clearTimeout(existingNotification?.timeoutId)

    const timeoutId = setTimeout(() => {
      dispatch(updateNotification(null))
    }, 5000)
    dispatch(updateNotification({content, timeoutId}))
  }
}

export default notificationSlice.reducer