import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { NavItem } from 'react-bootstrap';

import { about, menu } from '../content/content.js';

export default class Nav extends React.Component {
  render() {
    const displayMenu = Object.keys(menu).map((key, index) => {
      return (
        <li key={index} className="nav-item" >
          <LinkContainer to={'/' + key}><NavItem eventKey={index}>{menu[key]}</NavItem></LinkContainer>
        </li>
      );
    });

    return (
      <nav className="navbar navbar-fixed-top">
        <a className="navbar-brand" href="#">{ about.title }</a>
        <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2" aria-controls="exCollapsingNavbar2" aria-expanded="false" aria-label="Toggle navigation">
          &#9776;
        </button>
        <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
          <ul className="nav navbar-nav pull-right">
            { displayMenu }
            <li className="nav-item"><a href={ about.blog }>Blog</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
