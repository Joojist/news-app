import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

// Mock the necessary components
jest.mock("../pages/MainPage", () => () => <div>MainPage</div>);
jest.mock("../pages/LoginPage", () => () => <div>LoginPage</div>);
jest.mock("../components/Layout", () => ({ children }: any) => (
  <div>{children}</div>
));

const mockStore = configureMockStore([]);

describe("App Component", () => {
  it("should not allow unauthenticated users to access the MainPage", () => {
    const store = mockStore({
      auth: { isAuthenticated: false },
      news: {
        articles: [],
        loading: false,
        error: null,
        page: 1,
        pageSize: 10,
        totalResults: 0,
        searchQuery: "",
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.queryByText(/MainPage/i)).toBeNull();
    expect(screen.getByText(/LoginPage/i)).toBeInTheDocument();
  });

  it("should allow authenticated users to access the MainPage", () => {
    const store = mockStore({
      auth: { isAuthenticated: true },
      news: {
        articles: [],
        loading: false,
        error: null,
        page: 1,
        pageSize: 10,
        totalResults: 0,
        searchQuery: "",
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/MainPage/i)).toBeInTheDocument();
  });
});
