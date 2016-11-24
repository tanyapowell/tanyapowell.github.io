import React from 'react';
import { Button, Col, Image, Modal, Row } from 'react-bootstrap';

import { projects } from '../../content/content.js';

export default class CurrentProjects extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      url: '',
      github: ''
    };
  }

  componentWillMount() {
    this.setState({ url: projects.current.dmlService.url});
  }

  handleUrl() { window.location.href = this.state.url; }

  render() {
    const close = () => this.setState({ show: false});

    const displayCurrentProjects = Object.keys(projects.current).map((key, index) => {
      return (
        <div key={ index }>
        <Col xs={12} md={4} sm={4} className="project">
          <Image src={ projects.current[key].img } alt={ projects.current[key].title
            } thumbnail/>
          <div className="caption">
            <h5 className="heading looped-heading">{ projects.current[key].title }</h5>
            <p className="justified">{ projects.current[key].desc }</p>
            <a onClick={() => this.setState({ show: true})}>
              <i className="fa fa-eye fa-3x center" aria-hidden="true" />
            </a>
          </div>
        </Col>
        <Modal show={this.state.show} onHide={close} >
         <Modal.Header closeButton>
           <Modal.Title className="center">{ projects.current[key].title }</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <p>{ projects.current[key].title }</p>
         </Modal.Body>
         <Modal.Footer>
           <Button onClick={ this.handleUrl }>Visit { projects.current[key].url }</Button>
           <Button onClick={ close }>Close</Button>
         </Modal.Footer>
       </Modal>
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
