import React from 'react';
import './App.css';
import DenseAppBar from './Components/Header';

function App() {
  return (
    <div>
      <DenseAppBar />
      <div className="App">
        <header className="App-header">
          <h1>Weather App</h1>
        </header>

        <footer>
          Page created by Vidhi Vaghani
        </footer>
    </div>
    </div>
  );
}

export default App;
