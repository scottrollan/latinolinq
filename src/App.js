import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import AboutEng from './pages/About/AboutEng';
import ServicesEng from './pages/Services/ServicesEng';
import Calendar from './pages/Calendar/Calendar';
import CalendarEsp from './pages/Calendar/CalendarEsp';
import NewsletterEng from './pages/Newsletter/NewsletterEng';
import BoardEng from './pages/Board/BoardEng';
import SupportEng from './pages/Support/SupportEng';
import ContactEng from './pages/Contact/ContactEng';
import ResourcesEng from './pages/Resources/ResourcesEng';
import AboutEsp from './pages/About/AboutEsp';
import ServicesEsp from './pages/Services/ServicesEsp';
import NewsletterEsp from './pages/Newsletter/NewsletterEsp';
import BoardEsp from './pages/Board/BoardEsp';
import SupportEsp from './pages/Support/SupportEsp';
import ContactEsp from './pages/Contact/ContactEsp';
import ResourcesEsp from './pages/Resources/ResourcesEsp';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route path="/" exact component={Landing}></Route>
          <Route path="/AboutEng" exact component={AboutEng}></Route>
          <Route path="/ServicesEng" exact component={ServicesEng}></Route>
          <Route path="/Calendar" exact component={Calendar}></Route>
          <Route path="/NewsletterEng" exact component={NewsletterEng}></Route>
          <Route path="/BoardEng" exact component={BoardEng}></Route>
          <Route path="/SupportEng" exact component={SupportEng}></Route>
          <Route path="/ContactEng" exact component={ContactEng}></Route>
          <Route path="/ResourcesEng" exact component={ResourcesEng}></Route>
          <Route path="/AboutEsp" exact component={AboutEsp}></Route>
          <Route path="/ServicesEsp" exact component={ServicesEsp}></Route>
          <Route path="/CalendarEsp" exact component={CalendarEsp}></Route>
          <Route path="/NewsletterEsp" exact component={NewsletterEsp}></Route>
          <Route path="/BoardEsp" exact component={BoardEsp}></Route>
          <Route path="/SupportEsp" exact component={SupportEsp}></Route>
          <Route path="/ContactEsp" exact component={ContactEsp}></Route>
          <Route path="/ResourcesEsp" exact component={ResourcesEsp}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
