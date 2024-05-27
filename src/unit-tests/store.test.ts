import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "../redux/slices/newsSlice";
import authReducer from "../redux/slices/authSlice";
import store from "../redux/store";

// Define initial state for news and auth slices
const initialNewsState = {
  articles: [],
  loading: false,
  error: null,
  page: 1,
  pageSize: 10,
  totalResults: 0,
  searchQuery: "",
};

const initialAuthState = {
  email: "",
  token: "",
  isAuthenticated: false,
};

describe("Redux Store", () => {
  it("should initialize with the correct reducers", () => {
    const testStore = configureStore({
      reducer: {
        news: newsReducer,
        auth: authReducer,
      },
    });

    const state = testStore.getState();

    expect(state.news).toEqual(initialNewsState);
    expect(state.auth).toEqual(initialAuthState);
  });

  it("should use the correct dispatch type", () => {
    type DispatchType = typeof store.dispatch;
    let dispatch: DispatchType;

    dispatch = store.dispatch;

    expect(dispatch).toBeInstanceOf(Function);
  });

  it("should use the correct state type", () => {
    type StateType = ReturnType<typeof store.getState>;
    let state: StateType;

    state = store.getState();

    expect(state.news).toEqual(initialNewsState);
    expect(state.auth).toEqual(initialAuthState);
  });
});
