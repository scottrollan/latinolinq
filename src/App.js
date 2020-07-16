import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import AboutEng from './pages/About/AboutEng';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route></Route>
        </Switch>
      </Router>
      <AboutEng />
    </div>
  );
}

export default App;
