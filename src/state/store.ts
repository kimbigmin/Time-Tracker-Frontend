import { configureStore } from "@reduxjs/toolkit";
import calendarReducer from "./reducers/calendar";
import timeDataReducer from "./reducers/timeData";

export const store = configureStore({
  reducer: {
    calendar: calendarReducer,
    timeData: timeDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
