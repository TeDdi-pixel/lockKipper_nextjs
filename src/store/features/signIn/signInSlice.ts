import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emailEntered: false,
//   email: string,
};

export const signInSlice = createSlice({
  name: "loginForm",
  initialState,
  reducers: {
    setEmailEntered: (state, action) => {
      state.emailEntered = action.payload;
    },
  },
});

export const { setEmailEntered } = signInSlice.actions;

export default signInSlice.reducer;
