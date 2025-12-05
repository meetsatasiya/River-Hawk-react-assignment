import authReducer, { login, logout } from "../../store/AuthSlice";

describe("auth slice", () => {
  test("login updates state", () => {
    const state = authReducer(undefined, login("abc123"));
    expect(state.token).toBe("abc123");
    expect(state.isAuthenticated).toBe(true);
  });

  test("logout clears state", () => {
    const state = authReducer(undefined, logout());
    expect(state.isAuthenticated).toBe(false);
    expect(state.token).toBe(null);
  });
});
