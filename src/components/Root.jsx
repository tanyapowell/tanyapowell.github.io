import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Layout from './Layout.jsx';

import About from './containers/AboutContainer.jsx';
import Community from './pages/Community.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Skills from './pages/Skills.jsx';
import Talks from './pages/Talks.jsx';
import Photography from './pages/Photography.jsx';
import Contact from './pages/Contact.jsx';

module.exports = React.createClass({
  displayName: 'Root',

  render() {
    return (
      <Router history={ hashHistory }>
        <Route path="/" component={ Layout }>
          <IndexRoute component={ About } />
          <Route path="about" component={ About }/>
          <Route path="portfolio" component={ Portfolio }/>
          <Route path="skills" component={ Skills }/>
          <Route path="talks" component={ Talks }/>
          <Route path="community" component={ Community }/>
          <Route path="photography" component={ Photography }/>
          <Route path="contact" component={ Contact }/>
        </Route>
      </Router>
    );
  }
});
