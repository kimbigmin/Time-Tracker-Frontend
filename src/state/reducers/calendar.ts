import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CalendarState {
  yearAndMonth: string;
  selectedDate: number;
}

// 초기값
const initialState: CalendarState = {
  yearAndMonth: `${new Date().getFullYear()}.${new Date().getMonth() + 1}`,
  selectedDate: new Date().getDate(),
};

// slice
export const calendarSlice = createSlice({
  name: "calendar",
  initialState,
  reducers: {
    changeDate: (state, action: PayloadAction<string>) => {
      state.yearAndMonth = action.payload;
    },
    movePrevMonth: (state) => {
      let [year, month] = state.yearAndMonth.split(".");
      if (month === "1") {
        month = "12";
        year = String(Number(year) - 1);
        state.yearAndMonth = `${year}.${month}`;
        state.selectedDate = 1;
      } else {
        state.yearAndMonth = `${year}.${Number(month) - 1}`;
        state.selectedDate = 1;
      }
    },
    moveNextMonth: (state) => {
      let [year, month] = state.yearAndMonth.split(".");
      if (month === "12") {
        month = "1";
        year = String(Number(year) + 1);
        state.yearAndMonth = `${year}.${+month}`;
        state.selectedDate = 1;
      } else {
        state.yearAndMonth = `${year}.${Number(month) + 1}`;
        state.selectedDate = 1;
      }
    },
    setDate: (state, action: PayloadAction<number>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { changeDate, movePrevMonth, moveNextMonth, setDate } =
  calendarSlice.actions;
// Other code such as selectors can use the imported `RootState` type
// export const selectDate = (state: RootState) => state.date.value;

export default calendarSlice.reducer;
