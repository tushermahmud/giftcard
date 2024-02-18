import React from 'react';
import { UserProvider } from './context/userContext';
import Routes from './components/RouteFile';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App: React.FC = () => {

  return (
    <UserProvider>
      <ToastContainer />
      <Router>
        <Routes />
      </Router>
    </UserProvider>
  );
};

export default App;
