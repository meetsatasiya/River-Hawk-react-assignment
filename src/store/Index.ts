import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import { BaseApi } from "../api/BaseApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [BaseApi.reducerPath]: BaseApi.reducer,
  },
  middleware: (getDefault) => getDefault().concat(BaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
