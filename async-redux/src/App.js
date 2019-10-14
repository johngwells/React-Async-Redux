import React from 'react';
import logo from './logo.jpg';
import './App.css';

import Magic from './components/Magic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          * Search Bar *
        </p>
        <Magic />
      </header>
    </div>
  );
}

export default App;
