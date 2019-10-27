import React from 'react';
import './App.css'
import Anuario from './Anuario';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Anuario</h1>
      </header>
        <div id="anuario">
          <Anuario cantidadItems="8" />
        </div>       
    </div>
  );
}

export default App;
