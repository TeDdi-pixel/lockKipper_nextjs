import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/user/userSlice";
import settingsSlice from "./features/settings/settingsSlice";

export const makeStore = (preloadedState = {}) => {
  return configureStore({
    reducer: { user: userSlice, settings: settingsSlice },
    preloadedState,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
