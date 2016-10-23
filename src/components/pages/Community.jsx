import React from 'react';
import { Button, Col, Image, PageHeader, Row } from 'react-bootstrap';

import { communities } from '../../content/content.js';

export default class Community extends React.Component {
  handleClick() {
    window.location.href = communities.orgs.empowerhack.url;
  }

  render() {
    const displayCommunities = Object.keys(communities.orgs).map((key, index) => {
      return (
        <Col xs={12} md={6} sm={6} className="communities" key={ index }>
          <Image src={ communities.orgs[key].img } alt={ communities.orgs[key].title } rounded/>
          <p className="justified">{ communities.orgs[key].info }</p>
          <Button bsSize="large" onClick={ this.handleClick } className="draw meet">Visit { communities.orgs[key].title }</Button>
        </Col>
      );
    });

    return (
      <div id="community-background">
        <div className="community">
          <PageHeader>Open Source Communities</PageHeader>
          <p className="justified">{ communities.intro }</p>
          <Row>
            { displayCommunities }
          </Row>
        </div>
      </div>
    );
  }
}
