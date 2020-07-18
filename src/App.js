import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import AboutEng from './pages/About/AboutEng';
import ServicesEng from './pages/Services/ServicesEng';
import NewsletterEng from './pages/Newsletter/NewsletterEng';
import BoardEng from './pages/Board/BoardEng';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing}></Route>
          <Route path="/AboutEng" exact component={AboutEng}></Route>
          <Route path="/ServicesEng" exact component={ServicesEng}></Route>
          <Route path="/NewsletterEng" exact component={NewsletterEng}></Route>
          <Route path="/BoardEng" exact component={BoardEng}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
