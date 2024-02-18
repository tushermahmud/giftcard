import React from 'react';
import { UserProvider } from './context/userContext';
import Routes from './components/RouteFile';
import { BrowserRouter as Router } from 'react-router-dom';
const App: React.FC = () => {

  return (
    <UserProvider>
      <Router>
        <Routes />
      </Router>
    </UserProvider>
  );
};

export default App;
