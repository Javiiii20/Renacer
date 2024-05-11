import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AdminPage from './components/AdminPage';
import LoginPage from './components/LoginPage';
import { HomePage } from './HomePage';

import Header from './components/Header';
import { Footer } from './components/Footer';

export const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
    const handleLogout = () => {
      setIsLoggedIn(false);
    };
  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="admin" element={isLoggedIn ? <AdminPage onLogout={handleLogout} /> : <Navigate to="/login" />} />
            <Route path="login" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
        <Footer />
    </>
  )
}
