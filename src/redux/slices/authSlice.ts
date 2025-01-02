import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  accessToken: string | null;
}
const initialState: AuthState = {
  isLogin: true,
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
  accessToken: null,
};

type LoginParams = {
  userlog: string;
  passlog: string;
};
// export const dataMiddleware = createAsyncThunk("auth/login", async(endpoint));
// export const login = createAsyncThunk(
//   "auth/login",
//   async (params: LoginParams, thunkApi) => {
//     try {
//       const response = await instance.post("/auth/login", {
//         username: params.userlog,
//         pass: params.passlog, // need encrypt before send to server
//       });
//       // return response.data;
//       return thunkApi.fulfillWithValue(response.data as User);
//     } catch (error) {
//       const {
//         response: { status },
//         message,
//       } = error as any;
//       if (status === 401)
//         return thunkApi.rejectWithValue(
//           "Tên đăng nhập hoặc mật khẩu không đúng"
//         );
//       return thunkApi.rejectWithValue(message);
//     }
//   }
// );

export const login = createAsyncThunk(
  "auth/login",
  async (params: LoginParams, thunkApi) => {
    try {
      const response = await instance.post("/auth/login", {
        username: params.userlog,
        pass: params.passlog,
      });
      console.log(response);
      return thunkApi.fulfillWithValue(response.data as User);
    } catch (error) {
      return thunkApi.rejectWithValue({ error });
    }
  }
);
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
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false;
        state.isLogin = true;
        // Cập nhật accessToken và thông tin người dùng
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.isLogin = false;
        state.accessToken = null; // Reset token khi đăng nhập thất bại
        // Nếu cần, bạn có thể lưu thông báo lỗi từ `action.payload` hoặc `action.error.message` ở đây
      });
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(login.pending, (state) => {
  //       state.isLoading = true;
  //     })
  //     .addCase(login.fulfilled, (state, action) => {
  //       state.isLoading = false;
  //       state.isLogin = !action.payload?.newbie;
  //       state.user = action.payload;
  //     })
  //     .addCase(login.rejected, (state) => {
  //       state.isLoading = false;

  //       // state.error = `${action?.payload}`;
  //       state.isLogin = false;
  //     });
  // },
});
export const { setUsername, setPassword, resetState } = authSlice.actions;
export default authSlice.reducer;
