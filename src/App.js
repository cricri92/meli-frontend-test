import React from 'react';
import logo2x from 'assets/img/Logo_ML@2x.png';
import 'App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo2x} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <button className="btn btn-sm btn-primary">button</button>
      </header>
    </div>
  );
}

export default App;
