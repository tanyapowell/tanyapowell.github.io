import React from 'react';
import { Col, Image, PageHeader, Row } from 'react-bootstrap';

import Community from './Community.jsx';

import { speaking } from '../../content/content.js';

export default class Talks extends React.Component {
  render() {
    const displayTalks = Object.keys(speaking.talks).map((key, index) => {
      return (
        <Col xs={12} md={4} sm={4} key={ index } className="talk">
          <a href={ speaking.talks[key].slides }>
            <Image src={ speaking.talks[key].img } alt={ speaking.talks[key].title
            } rounded/>
          </a>
          <h5 className="heading looped-heading">{ speaking.talks[key].title }</h5>
          <p className="justified">{ speaking.talks[key].desc }</p>
        </Col>
      );
    });

    return (
      <div>
        <div id="speaking-background">
          <div className="speaking">
            <PageHeader>Talks</PageHeader>
            <p className="justified">{ speaking.intro }</p>
            <Row className="talks">
              { displayTalks }
            </Row>
          </div>
        </div>
        <Community />
      </div>
    );
  }
}
