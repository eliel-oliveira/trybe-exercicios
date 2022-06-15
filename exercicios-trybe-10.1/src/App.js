import logo from './logo.svg';
import './App.css';
import tick from './tick';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World!</h1>
        {tick}
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Documentação </a>
      </header>
    </div>
  );
}
// setInterval(tick, 1000);
export default App;
