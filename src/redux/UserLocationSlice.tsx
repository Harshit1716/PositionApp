import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { lazy } from "react";

interface CounterState {
  location: string;
  long: number;
  lat: number;
  time: number;
}
export interface Data {
  latitude: number;
  name: string;
  longitude: number;
}

const initialState: CounterState[] = [
  {
    location: "Demo",
    lat: 37.78825,
    long: -122.4324,
    time: new Date().getTime(),
  },
];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addLocation: (state, { payload }: PayloadAction<Data>) => {
      //   state.value += 1
      if (state.length < 31) {
        state.push({
          location: payload?.name,
          lat: payload?.latitude,
          long: payload?.longitude,
          time: new Date().getTime(),
        });
      }
    },
    deleteAllLocation: (state) => {
      console.log("inside ");
      state.splice(0, state.length);
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    deleteLocationByIndex: (state, action: PayloadAction<number>) => {
      //   state.value += action.payload
      state.splice(action?.payload, 1);
    },
  },
});

export const { addLocation, deleteAllLocation, deleteLocationByIndex } =
  userSlice.actions;

export default userSlice.reducer;
