import React from 'react';
import { PageHeader } from 'react-bootstrap';

import CurrentProjects from './CurrentProjects.jsx';
import CompletedProjects from './CompletedProjects.jsx';

import { projects } from '../../content/content.js';

export default class Portfolio extends React.Component {

  render() {
    return (
      <div>
        <div id="portfolio-background">
          <div className="portfolio">
            <PageHeader>Projects</PageHeader>
            <p className="justified">{ projects.intro }</p>
          </div>
        </div>
        <CurrentProjects />
        <CompletedProjects />
      </div>
    );
  }
}
