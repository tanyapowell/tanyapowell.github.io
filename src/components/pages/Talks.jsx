import React from 'react';
import { Button, Col, Image, PageHeader, Row } from 'react-bootstrap';
import { Link } from 'react-router';

import { speaking } from '../../content/content.js';

export default class Talks extends React.Component {
  render() {
    const displayTalks = Object.keys(speaking.talks).map((key, index) => {
      return (
        <Col xs={12} md={4} sm={6} key={ index } className="talk">
            <Image src={ speaking.talks[key].img } alt={ speaking.talks[key].title
            } thumbnail/>
            <div className="caption">
              <h5 className="heading looped-heading">{ speaking.talks[key].title }</h5>
              <p className="justified">{ speaking.talks[key].desc }</p>
              <a href={ speaking.talks[key].slides }>
                <i className="fa fa-eye fa-3x center" aria-hidden="true" />
              </a>
            </div>
        </Col>
      );
    });

    return (
      <div>
        <div id="speaking-background">
          <div className="speaking">
            <PageHeader>Talks</PageHeader>
            <p className="justified">{ speaking.intro }</p>
            <p className="justified">{ speaking.intro2 }</p>
            <Link to="/contact"><Button bsSize="large" className="draw meet talk-btn">Contact Me</Button></Link>
            <Row className="talks">
              { displayTalks }
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
