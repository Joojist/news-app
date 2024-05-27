import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./slices/newsSlice";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    news: newsReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
