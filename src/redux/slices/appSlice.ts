import { createSlice } from "@reduxjs/toolkit";
import { Theme } from "../../configs";

interface AppState {
  modeTheme: string;
  reloadCart: boolean;
}
const initialState: AppState = {
  modeTheme: Theme.LIGHT,
  reloadCart: false,
};
export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    toggleSetTheme: (state) => {
      state.modeTheme =
        state.modeTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    },
    toggleSetReload: (state) => {
      state.reloadCart = !state.reloadCart;
    },
  },
});
export const { toggleSetTheme, toggleSetReload } = appSlice.actions;
export default appSlice.reducer;
