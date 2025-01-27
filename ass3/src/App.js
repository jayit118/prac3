import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://rimport { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>}/>
        </Routes>

      </div>
    </>
  );
}

export default App;eactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
