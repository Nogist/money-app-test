import React from 'react';
import { Routes, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import SignIn from './pages/SignIn/SignIn';
import Protectedroutes from './Admin/Protectedroutes';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route element ={<Protectedroutes  isLogged={false}/>}>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Route>
    </Routes>
  );
};

export default App;
