import React from 'react';
import { Link } from 'react-router';

import { about, sitemap, social, socialUrls } from '../content/content.js';

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
      let urls;
      let fontAwesomeLogo;
      for (const value in socialUrls) {
        if (socialUrls.hasOwnProperty(value)) {
          urls = socialUrls[value];
          if (value === 'twitterLink') {
            fontAwesomeLogo = 'fa-twitter';
          } else if (value === 'githubLink') {
            fontAwesomeLogo = 'fa-github';
          } else {
            fontAwesomeLogo = 'fa-linkedin';
          }
        }
        console.log('font awesome', fontAwesomeLogo, 'social', urls);
      }
      return (
        <li key={ index }>
          <a href={ urls }>
            <i className={'fa ' + fontAwesomeLogo} aria-hidden="true"/>
            <small> { social[key] }</small>
            </a>
        </li>
      );
    });

    return (
      <footer>
        <hr/>
        <div className="container">
          <div className="row flex-items-md-bottom flex-items-sm-bottom flex-items-xs-bottom">
            <div className="col-md-8 col-sm-8 col-xs-8 sitemap-title">
              { about.sitemapTitle }
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4 sitemap-title">
              { about.sitemapContact }
            </div>
          </div>
          <div className="row flex-items-md-bottom flex-items-sm-bottom flex-items-xs-bottom">
            <div className="col-md-8 col-sm-8 col-xs-8">
              <ul className="sitemap">
                { displaySitemap }
                <a href={ about.blog }><small>Blog</small></a>
              </ul>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-4">
              <ul>
                { displaySocial }
              </ul>
            </div>
          </div>
        </div>
        <i className="fa fa-copyright" aria-hidden="true"> Tanya Powell 2016</i>
      </footer>
      );
  }
}
