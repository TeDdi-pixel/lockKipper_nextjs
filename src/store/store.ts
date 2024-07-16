import { configureStore } from "@reduxjs/toolkit";
import signInSlice from "./features/signIn/signInSlice";

export const makeStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      signInSlice: signInSlice,
    },
    preloadedState,
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
