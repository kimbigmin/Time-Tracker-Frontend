import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OneDay } from "../../type";

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
  const response = await (
    await fetch(`${process.env.REACT_APP_SERVER_URL}/time`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
  ).json();

  dispatch(timesReceived(response));
};

export const fetchOneDay = (id?: string) => async (dispatch: any) => {
  dispatch(timesLoading());
  if (id) {
    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/time/${id}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await response.json();
    await dispatch(oneDayReceived(res));
  } else {
    dispatch(oneDayReceived(defaultState));
  }
};

export const defaultState = {
  improve: {
    reading: "",
    rest: "",
    study: "",
    workout: "",
  },
  private: {
    game: "",
    privates: "",
  },
  sleeping: {
    nap: "",
    night: "",
    sleep: "",
    wake: "",
  },
  working: {
    houseWork: "",
    works: "",
  },
};

export default timeDataSlice.reducer;
