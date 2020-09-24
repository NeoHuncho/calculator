import React from 'react';
import Calculator  from './components/Calculator';
import {GlobalProvider} from './context/GlobalState'
import './App.css';

function App() {
  return (
    <GlobalProvider>
    <div className="App">
      <Calculator />
      
    </div>
    </ GlobalProvider>
  );
}

export default App;
