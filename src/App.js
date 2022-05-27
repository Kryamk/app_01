import logo from './logo.svg';
import logo2 from './hedgehog.svg';
import './App.css';
import './App2.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={logo2} className="App-logo App-logo2" alt="logo2" />
        <h1>Hello World!</h1>
        <hr className='App-line'/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
          Learn React! ! ! !!!!!!!!!!!!
        </a>
        <hr className='App-line'/>
        <select>
          <option value="1">One cake</option>
          <option value="2">Two cake</option>
          <option value="3">Three cake</option>
        </select>
      </header>
    </div>
  );
}

export default App;
