import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router';

import { about, sitemap, social } from '../content/content.js';

export default class Footer extends React.Component {
  render() {
    const displaySitemap = Object.keys(sitemap).map((key, index) => {
      return (
        <li key={index}>
          <Link to={'/' + key}><small>{sitemap[key]}</small></Link>
        </li>
      );
    });

    const displaySocial = Object.keys(social).map((key, index) => {
      return (
          <li key={ index } className="footer-social">
            <i className={'fa fa-' + key} aria-hidden="true"/>
            <a href={ social[key] }>
              <small> { key }</small>
              </a>
          </li>
        );
    });

    return (
      <footer>
        <div className="container">
            <Col xs={8} md={8} sm={8}>
              { about.sitemapTitle }
            </Col>
            <Col xs={4} md={4} sm={4}>
              { about.sitemapContact }
            </Col>
            <Col xs={8} md={8} sm={8}>
              <ul className="sitemap">
                { displaySitemap }
                <a href={ about.blog }><small>Blog</small></a>
              </ul>
            </Col>
            <Col xs={4} md={4} sm={4}>
              <ul>
                { displaySocial }
              </ul>
            </Col>
            <i className="fa fa-copyright" aria-hidden="true"> Tanya Powell 2016</i>
        </div>
      </footer>
      );
  }
}
