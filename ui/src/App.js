import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [names, setNames] = useState('')

  useEffect(() => {
    fetch('backend')
      .then(res => res.json())
      .then(data => setNames(data.names))
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          by: {names}
        </a>
      </header>
    </div>
  );
}

export default App;
