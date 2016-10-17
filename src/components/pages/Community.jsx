import React from 'react';
import { Button, Col, Image, PageHeader, Panel } from 'react-bootstrap';

import { communities } from '../../content/content.js';

export default class Community extends React.Component {
  // static propTypes: {
  //  communities: React.PropTypes.array.isRequired,
  // };
  //
  // static defaultProps: {
  //   communities: communities;
  // };

  handleClick() {
    window.location.href = communities.empowerhack.url;
  }

  render() {
    const displayCommunities = Object.keys(communities).map((key, index) => {
      return (
        <Col xs={12} md={6} sm={6} key={ index } >
          <Panel header={ communities.empowerhack.title }>
            <Image src={ communities.empowerhack.img } alt={ communities.empowerhack.title } thumbnail/>
            <p>{ communities.empowerhack.info }</p>
          </Panel>
          <Button bsSize="large" onClick={ this.handleClick } className="draw meet">Visit their website</Button>
        </Col>
      );
    });

    return (
      <div id="community-background">
        <div className="community">
          <PageHeader>Open Source Communities</PageHeader>
          <p>Tart cupcake marshmallow powder powder ice cream. Pastry bear claw marzipan sugar plum tart powder biscuit. Wafer dragée gummies cookie brownie cotton candy lemon drops. Brownie donut gingerbread cake dessert.</p>
          <p>Tootsie roll tootsie roll dessert marshmallow. Oat cake gummi bears donut jelly-o powder sweet muffin. Carrot cake soufflé wafer biscuit cupcake pie muffin cake sweet.</p>
          <p>Tart marzipan caramels apple pie toffee biscuit donut. Dessert cotton candy candy canes. Donut chocolate cake halvah. Bonbon candy pastry danish cake macaroon chocolate.</p>
          { displayCommunities }
        </div>
      </div>
    );
  }
}
