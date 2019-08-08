import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

const Home = () => (
  <div>
    Home
  </div>
)

const Contact = () => (
  <div>
    <a style={{color:"white"}} target="__blank" href="https://github.com/sonakshs/cra-ssr-firebase">View Source</a>
  </div>
)

const LinkComponent = () => (
  <div>
    Hard refresh to see dynamic title working.
  </div>
)

const MainMenu = () => {
return (
<div>
  <Link to="/">
    <button>Home</button>
  </Link>
  <Link to="/link">
    <button>Link Test</button>
  </Link>
  <Link to="/contact">
    <button>Contact Us</button>
  </Link>
</div>
);
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <MainMenu />
          <div style={{color: "white", padding:"2em"}}>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/link" component={LinkComponent} />
          </div>
        </header>
      </div>
    </Router>
  );
}

export default App;
