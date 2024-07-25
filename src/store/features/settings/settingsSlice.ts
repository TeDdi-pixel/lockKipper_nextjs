import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const cookiesUser = Cookies.get("user");
const cookiesProfilePhoto = Cookies.get("profilePhoto");

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    status: false,
  },
  reducers: {
    setSettings: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload;
    },
  },
});

export const { setSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
