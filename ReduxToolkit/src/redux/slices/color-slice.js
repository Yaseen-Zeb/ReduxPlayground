import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
  name: "colors",
  initialState: {
    color: "blue",
  },
  reducers: {
    generateColor: (state,action) => {
     state.color = action.payload;
    },
  },
});

export const { generateColor } = colorSlice.actions;

export default colorSlice.reducer;
