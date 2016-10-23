import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

import { projects } from '../../content/content.js';

export default class CompletedProjects extends React.Component {

  render() {
    const displayCompletedProjects = Object.keys(projects.completed).map((key, index) => {
      return (
        <Col xs={12} md={4} sm={4} key={ index } className="project">
          <Image src={ projects.completed[key].img } alt={ projects.completed[key].title
            } thumbnail/>
          <h5 className="heading looped-heading">{ projects.completed[key].title }</h5>
          <p className="justified">{ projects.completed[key].desc }</p>
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
