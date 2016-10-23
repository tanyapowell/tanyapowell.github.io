import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

import { projects } from '../../content/content.js';

export default class CurrentProjects extends React.Component {

  render() {
    const displayCurrentProjects = Object.keys(projects.current).map((key, index) => {
      return (
        <Col xs={12} md={4} sm={4} key={ index } className="project">
          <Image src={ projects.current[key].img } alt={ projects.current[key].title
            } thumbnail/>
          <h5 className="heading looped-heading">{ projects.current[key].title }</h5>
          <p className="justified">{ projects.current[key].desc }</p>
        </Col>
      );
    });

    return (
      <div id="current-projects-background">
        <Row className="current">
          <h3 className="heading">Current Projects</h3>
          { displayCurrentProjects }
        </Row>
      </div>
    );
  }
}
