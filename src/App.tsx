import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Layout from './components/Layout';
import ProtectedRoute from './components/protectedRoute';

const App: React.FC = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return (
      <Router>
        <Layout>
          <Routes>
            <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />} />
            <Route path="/" element={<ProtectedRoute />}>
              <Route path="/" element={<MainPage />} />
            </Route>
          </Routes>
        </Layout>
      </Router>
  );
};

export default App;
