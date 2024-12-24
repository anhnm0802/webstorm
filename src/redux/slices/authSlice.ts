import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  Tuple,
} from "@reduxjs/toolkit";
import instance from "../../service/api";

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN",
  MODERATOR = "MODERATOR", // Thêm nếu có
}

interface User {
  username: string;
  password: string;
  fullname: string;
  sex: string;
  email: string;
  address: string;
  role: UserRole;
  createAt: Date;
  updateAt: Date;
}
interface AuthState {
  isLogin: boolean;
  isLoading: boolean;
  user: User;
}
const initialState: AuthState = {
  isLogin: false,
  isLoading: false,
  user: {
    username: "",
    password: "",
    fullname: "",
    sex: "",
    email: "",
    address: "",
    role: UserRole.USER,
    createAt: new Date(),
    updateAt: new Date(),
  },
};

type LoginParams = {
  username: string;
  password: string;
};
// export const dataMiddleware = createAsyncThunk("auth/login", async(endpoint));

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.user.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.user.password = action.payload;
    },
    resetState: (state) => {
      state.user.address = "";
      state.user.createAt = new Date();
      state.user.email = "";
      state.user.fullname = "";
      state.user.password = "";
      state.user.role = UserRole.USER;
      state.user.sex = "";
      state.user.updateAt = new Date();
      state.user.username = "";
    },
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(login.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(login.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.isLogin = true;
  //       state.user = action.payload;
  //     })
  //     .addCase(login.rejected, (state) => {
  //       state.isLoading = false;
  //       state.isLogin = false;
  //     });
  // },
});
export const { setUsername, setPassword, resetState } = authSlice.actions;
export default authSlice.reducer;
