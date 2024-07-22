import { TypeUser } from "@/shared/types/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const cookiesUser = Cookies.get("user");
const cookiesProfilePhoto = Cookies.get("profilePhoto");

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: cookiesUser ? JSON.parse(cookiesUser) : null,
    profilePhoto: cookiesProfilePhoto ? JSON.parse(cookiesProfilePhoto) : null,
  },
  reducers: {
    setUser: (state, action: PayloadAction<TypeUser | null>) => {
      if (action.payload) {
        state.user = action.payload;
        Cookies.set("user", JSON.stringify(state.user));
      }
    },
    setProfilePhoto: (state, action: PayloadAction<string | null>) => {
      state.profilePhoto = action.payload;
      Cookies.set("profilePhoto", JSON.stringify(state.profilePhoto));
    },
  },
});

export const { setUser, setProfilePhoto } = userSlice.actions;

export default userSlice.reducer;
