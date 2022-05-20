import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Amazing personal website coming soon...
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=5qap5aO4i9A"
          target="_blank"
          rel="noopener noreferrer"
        >
          Music While You Wait
        </a>
      </header>
    </div>
  );
}

export default App;
