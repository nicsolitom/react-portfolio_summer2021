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
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <nav className="navbar navbar-light bg-light">
            <form className="form-inline">
              <NavLink
                exact
                to="/"
                className="NavLink btn btn-outline-light ml-2"
                type="button"
              >
                Home
              </NavLink>
              <NavLink
                to="/credit"
                className="NavLink btn btn-outline-light ml-2"
                type="button"
              >
                Credit
              </NavLink>
              <NavLink
                to="/about"
                className="NavLink btn btn-outline-light ml-2"
                type="button"
              >
                About
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
      </header>
      <footer className="App-footer">
        <h6> Nic Solitom &copy; 2021</h6>
      </footer>
    </div>
  );
}

export default App;
