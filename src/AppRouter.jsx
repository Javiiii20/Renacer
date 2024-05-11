import { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import AdminPage from './components/AdminPage';
import LoginPage from './components/LoginPage';
import { HomePage } from './HomePage';

export const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Función para manejar el inicio de sesión
    const handleLogin = () => {
      setIsLoggedIn(true);
    };
  
    // Función para manejar el cierre de sesión
    const handleLogout = () => {
      setIsLoggedIn(false);
    };
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
            <Route path="/admin" element={isLoggedIn ? <AdminPage onLogout={handleLogout} /> : <Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        </Routes>
    </>
  )
}
