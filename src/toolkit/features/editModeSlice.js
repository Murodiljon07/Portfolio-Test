import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const changeMode = createSlice({
  name: "toggleEditMode",
  initialState,
  reducers: {
    goEditMode: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { goEditMode } = changeMode.actions;
export default changeMode.reducer;
