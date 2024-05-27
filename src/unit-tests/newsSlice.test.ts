import newsReducer, {
  fetchNews,
  resetPage,
  setSearchQuery,
} from "../redux/slices/newsSlice";
import { configureStore } from "@reduxjs/toolkit";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

describe("newsSlice", () => {
  const initialState = {
    articles: [],
    loading: false,
    error: null,
    page: 1,
    pageSize: 10,
    totalResults: 0,
    searchQuery: "",
  };

  it("should return the initial state", () => {
    expect(newsReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle setSearchQuery", () => {
    const actual = newsReducer(initialState, setSearchQuery("test query"));
    expect(actual.searchQuery).toEqual("test query");
  });

  it("should handle resetPage", () => {
    const state = { ...initialState, page: 3 };
    const actual = newsReducer(state, resetPage());
    expect(actual.page).toEqual(1);
  });

  describe("fetchNews thunk", () => {
    const store = configureStore({ reducer: { news: newsReducer } });

    it("should handle fetchNews", async () => {
      const mockResponse = {
        articles: [
          {
            title: "Test Article",
            url: "https://test.com",
            urlToImage: "https://test.com/image.jpg",
            source: { name: "Test Source" },
            publishedAt: new Date().toISOString(),
          },
        ],
        totalResults: 1,
      };

      mock.onGet(/newsapi/).reply(200, mockResponse);

      await store.dispatch(
        fetchNews({ token: "test_token", page: 1, pageSize: 10, query: "" }),
      );
      const state = store.getState().news;

      expect(state.articles).toHaveLength(1);
      expect(state.totalResults).toBe(1);
      expect(state.loading).toBe(false);
      expect(state.error).toBe(null);
    });
  });
});
