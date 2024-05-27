import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  email: string;
  token: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  email: "",
  token: "",
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ email: string; token: string }>) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem(
        "auth",
        JSON.stringify({
          email: action.payload.email,
          token: action.payload.token,
          timestamp: new Date().getTime(),
        }),
      );
    },
    logout: (state) => {
      state.email = "";
      state.token = "";
      state.isAuthenticated = false;
      localStorage.removeItem("auth");
    },
    setAuthenticated: (
      state,
      action: PayloadAction<{ email: string; token: string }>,
    ) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
  },
});

export const { login, logout, setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
