import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const changeMode = createSlice({
  name: "changeMode",
  initialState,
  reducers: {
    editMode: (state, { payload }) => {
      state = !state;
    },
  },
});

export const { editMode } = changeMode.actions;
export default changeMode.reducer;
