import { configureStore } from "@reduxjs/toolkit";
import reportReducer from "./features/report";

export const store = configureStore({
  reducer: {
    report: reportReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
