import { configureStore } from "@reduxjs/toolkit";
import editReducer from "./features/editModeSlice";

export const store = configureStore({
  reducer: {
    editMode: editReducer,
  },
});
