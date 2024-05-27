import React, { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { logout, setAuthenticated } from "./redux/slices/authSlice";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/protectedRoute";

const App: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const dispatch = useDispatch();
  const [showSearchBar, setShowSearchBar] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  useEffect(() => {
    const authData = localStorage.getItem("auth");
    if (authData) {
      const { email, token, timestamp } = JSON.parse(authData);
      const currentTime = new Date().getTime();
      if (currentTime - timestamp < 5 * 60 * 1000) {
        // 5 minutes
        dispatch(setAuthenticated({ email, token }));
        const remainingTime = 5 * 60 * 1000 - (currentTime - timestamp);
        setTimeout(() => {
          dispatch(logout());
        }, remainingTime);
      } else {
        localStorage.removeItem("auth");
      }
    }
  }, [dispatch]);

  return (
    <Layout toggleSearchBar={toggleSearchBar} isAuthenticated={isAuthenticated}>
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route path="/" element={<ProtectedRoute />}>
          <Route
            path="/"
            element={<MainPage showSearchBar={showSearchBar} />}
          />
        </Route>
      </Routes>
    </Layout>
  );
};

export default App;
