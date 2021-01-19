import React from 'react';
import './App.css';
import Header from '../src/components/layout/header/Header'
import Sidenav from '../src/components/layout/sidenav/Sidenav'

const App = () => {
  return (
      <div className="App">
        <Header />
        <Sidenav />
      </div>
  );
};

export default App;
