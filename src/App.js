import React from 'react';
import Calculator  from './components/Calculator';
import {GlobalProvider} from './context/GlobalState'


function App() {
  return (
    <GlobalProvider>
      <h2 style={{textAlign:'center'}}>React Hooks Calculator</h2>
    <div className="App">
      <Calculator />
    </div>
    </ GlobalProvider>
  );
}

export default App;
