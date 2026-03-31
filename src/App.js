import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import App2 from './App2';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <nav>
            <Link to="/" style={{ color: 'white', margin: '10px' }}>Home</Link>
            <Link to="/app2" style={{ color: 'white', margin: '10px' }}>Page</Link>
          </nav>

          <Routes>
            <Route path="/" element={<h1>Hello World</h1>} />
            <Route path="/app2" element={<App2 />} />
          </Routes>
        </header>
      </div>
    </HashRouter>
  );
}

export default App;