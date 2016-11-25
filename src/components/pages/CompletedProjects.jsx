import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

import { projects } from '../../content/content.js';

export default class CompletedProjects extends React.Component {

  render() {
    const displayCompletedProjects = Object.keys(projects.completed).map((key, index) => {
      return (
        <Col xs={12} md={6} sm={6} key={ index } className="project">
          <Image src={ projects.completed[key].img } alt={ projects.completed[key].title
            } thumbnail/>
          <div className="caption">
            <h5 className="heading looped-heading">{ projects.completed[key].title }</h5>
            <p className="justified">{ projects.completed[key].desc }</p>
            <a href={ projects.completed[key].url }>
              <i className="fa fa-eye fa-3x center" aria-hidden="true" />
            </a>
          </div>
        </Col>
      );
    });

    return (
      <div id="completed-projects-background">
        <Row className="completed">
          <h3 className="heading">Completed Projects</h3>
          { displayCompletedProjects }
        </Row>
      </div>
    );
  }
}
