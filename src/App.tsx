import React, { useState, useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Protectedroutes from './Admin/Protectedroutes';
import SignIn from './pages/SignIn/SignIn';
import { UserContext }  from './Admin/UserContext';

const App: React.FC = () => {
  const { user }= useContext(UserContext);
  const [isLogged, setIsLogged] = useState(false);

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <Routes>
      <Route path="/" element={<SignIn setIsLogged={setIsLogged} />} />
      <Route element={user ? <Protectedroutes isLogged={isLogged} /> : null}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default App;
