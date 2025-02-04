import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "../../configs";

interface AppState {
  modeTheme: string;
}
const initialState: AppState = {
  modeTheme: Theme.LIGHT,
};
export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    toggleSetTheme: (state) => {
      state.modeTheme =
        state.modeTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    },
  },
});
export const { toggleSetTheme } = appSlice.actions;
export default appSlice.reducer;
