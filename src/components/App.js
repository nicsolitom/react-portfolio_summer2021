import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

import Home from '../views/Home';
import About from '../views/About';
import Credit from '../views/Credit';

import '../styles/App.scss';
import '@fortawesome/fontawesome-free/css/all.css';

function App() {
  const ColoredLine = ({ color }) => (
    <hr className="WhiteLine"
        style={{
            color: color,
            backgroundColor: color,
            height: 1
        }}
    />
);
  return (
    <div className="App">
      <header className="App-header">
        <div className="TitleContainer">
        <h3 className="MyName">Nic Solitom</h3><h3 className="MyLocation">⋮⋮⋮ Berlin / Earth</h3>
        <ColoredLine color="white" />
        <h4 className="MyTitle">design and web development</h4>
        </div></header>
        <Router>
          <nav className="navbar">
            <form className="form-inline">
              <NavLink
                exact
                to="/"
                className="NavLink btn btn-outline-black ml-2"
                type="button"
              >
                WORK
              </NavLink>
              <NavLink
                to="/about"
                className="NavLink btn btn-outline-black ml-2"
                type="button"
              >
                ABOUT ME
              </NavLink>
              <NavLink
                to="/credit"
                className="NavLink btn btn-outline-black ml-2"
                type="button"
              >
                MY PATH
              </NavLink>
            </form>
          </nav>

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/about" component={About} />
            <Route path="/credit" component={Credit} />
            <Route path="*" render={() => <div>404 - Not Found</div>} />
          </Switch>
        </Router>
      
      <footer className="App-footer">
        {/* <h6> Nic Solitom &copy; 2021</h6> */}
      </footer>
    </div>
  );
}

export default App;
