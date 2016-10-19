import React from 'react';
import { Button, Col, Image, PageHeader, Panel } from 'react-bootstrap';

import { communities } from '../../content/content.js';

export default class Community extends React.Component {
  handleClick() {
    window.location.href = communities.orgs.empowerhack.url;
  }

  render() {
    const displayCommunities = Object.keys(communities).map((key, index) => {
      return (
        <Col xs={12} md={6} sm={6} key={ index } >
          <Panel header={ communities.orgs.empowerhack.title }>
            <Image src={ communities.orgs.empowerhack.img } alt={ communities.orgs.empowerhack.title } thumbnail/>
            <p>{ communities.orgs.empowerhack.info }</p>
          </Panel>
          <Button bsSize="large" onClick={ this.handleClick } className="draw meet">Visit { communities.orgs.empowerhack.title }</Button>
        </Col>
      );
    });

    return (
      <div id="community-background">
        <div className="community">
          <PageHeader>Open Source Communities</PageHeader>
          <p>{ communities.intro }</p>
          { displayCommunities }
        </div>
      </div>
    );
  }
}
