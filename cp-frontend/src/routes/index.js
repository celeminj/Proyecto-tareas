import { Routes, Route } from 'react-router-dom';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import Dashboard from '../components/Dashboard/dashboard';
import AuthLayout from '../components/AuthLayout/AuthLayout.jsx';
import Layout from '../components/Layout/Layout.jsx';

function AppRoutes() {
  return (
    <Routes>
          <Route element={<AuthLayout />}>
            <Route  path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>

          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

    </Routes>
  );
}

export default AppRoutes;