import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OneDay } from "../../type";
import axios from "axios";
import { defaultState } from "../../components/InputForm/InputForm";

interface TimeDataState {
  loading: boolean;
  data: OneDay[] | [];
  formTime: OneDay | {} | any;
}

const initialState: TimeDataState = {
  loading: true,
  data: [],
  formTime: {},
};

const timeDataSlice = createSlice({
  name: "timeData",
  initialState,
  reducers: {
    timesLoading: (state) => {
      if (state.loading) {
        state.loading = false;
      }
    },
    timesReceived: (state, action: PayloadAction<OneDay[]>) => {
      if (!state.loading) {
        state.loading = true;
        state.data = action.payload;
      }
    },
    oneDayReceived: (state, action: PayloadAction<any>) => {
      if (!state.loading) {
        state.loading = true;
        state.formTime = action.payload;
      }
    },
  },
});

export const { timesLoading, timesReceived, oneDayReceived } =
  timeDataSlice.actions;

export const fetchAllTime = () => async (dispatch: any) => {
  dispatch(timesLoading());
  const response = await fetch("http://localhost:3000/time", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const res = await response.json();
  dispatch(timesReceived(res));
};

export const fetchOneDay = (id?: string) => async (dispatch: any) => {
  dispatch(timesLoading());
  if (id) {
    const response = await fetch(`http://localhost:3000/time/${id}`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    dispatch(oneDayReceived(res));
  } else {
    dispatch(oneDayReceived(defaultState));
  }
};

export default timeDataSlice.reducer;
