import React from 'react';
import './App.css';
import LoginComponent from './components/Login/login.componet';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <LoginComponent />
      </HashRouter>
      
    </div>
  );
}

export default App;
