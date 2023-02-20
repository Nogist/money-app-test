import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './Admin/UserContext';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <div className='App'>
          <App />
        </div>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);


