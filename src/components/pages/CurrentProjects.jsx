import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

import { projects } from '../../content/content.js';

export default class CurrentProjects extends React.Component {
  constructor() {
    super();
    // TODO - Modal
    this.state = {
      show: false,
      url: '',
      github: ''
    };
  }

  // TODO - Modal
  componentWillMount() {
    this.setState({ url: projects.current.dmlService.url});
  }

  // TODO - Modal
  handleUrl() { window.location.href = this.state.url; }

  render() {
    const displayCurrentProjects = Object.keys(projects.current).map((key, index) => {
      return (
        <div key={ index }>
        <Col xs={12} md={4} sm={4} className="project">
          <Image src={ projects.current[key].img } alt={ projects.current[key].title
            } thumbnail/>
          <div className="caption">
            <h5 className="heading looped-heading">{ projects.current[key].title }</h5>
            <p className="justified">{ projects.current[key].desc }</p>
            <a href={ projects.current[key].github }>
              <i className="fa fa-eye fa-3x center" aria-hidden="true" />
            </a>
          </div>
        </Col>
       </div>
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
