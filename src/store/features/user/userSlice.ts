import { TypeUser } from "@/shared/types/user";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const cookiesUser = Cookies.get("user");

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: cookiesUser ? JSON.parse(cookiesUser) : null,
  },
  reducers: {
    setUser: (state, action: PayloadAction<TypeUser | null>) => {
      if (action.payload) {
        state.user = action.payload;
        Cookies.set("user", JSON.stringify(state.user));
      }
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
