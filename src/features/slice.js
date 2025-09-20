import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: app,
  initialState: {},
  reducers: {
    setData: (state, actions) => {},
  },
});

export const { setData } = slice.actions;
export default slice.reducer;
