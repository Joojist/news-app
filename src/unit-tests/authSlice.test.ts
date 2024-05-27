import authReducer, { login, logout } from "../redux/slices/authSlice";

describe("authSlice", () => {
  const initialState = {
    email: "",
    token: "",
    isAuthenticated: false,
  };

  it("should return the initial state", () => {
    expect(authReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle login", () => {
    const actual = authReducer(
      initialState,
      login({ email: "test@example.com", token: "test_token" }),
    );
    expect(actual.email).toEqual("test@example.com");
    expect(actual.token).toEqual("test_token");
    expect(actual.isAuthenticated).toEqual(true);
  });

  it("should handle logout", () => {
    const loggedInState = {
      email: "test@example.com",
      token: "test_token",
      isAuthenticated: true,
    };
    const actual = authReducer(loggedInState, logout());
    expect(actual.email).toEqual("");
    expect(actual.token).toEqual("");
    expect(actual.isAuthenticated).toEqual(false);
  });
});
