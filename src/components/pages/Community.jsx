import React from 'react';
import { PageHeader } from 'react-bootstrap';

import { communities } from '../../content/content.js';

export default class Community extends React.Component {

  render() {
    const displayCommunities = Object.keys(communities).map((key, index) => {
      return (
        <li key={index} >{communities[key]}</li>
      );
    });

    return (
      <div id="community-background">
        <div className="community">
          <PageHeader>Open Source Communities</PageHeader>
          <p>Tart cupcake marshmallow powder powder ice cream. Pastry bear claw marzipan sugar plum tart powder biscuit. Wafer dragée gummies cookie brownie cotton candy lemon drops. Brownie donut gingerbread cake dessert.</p>
          <p>Tootsie roll tootsie roll dessert marshmallow. Oat cake gummi bears donut jelly-o powder sweet muffin. Carrot cake soufflé wafer biscuit cupcake pie muffin cake sweet.</p>
          <p>Tart marzipan caramels apple pie toffee biscuit donut. Dessert cotton candy candy canes. Donut chocolate cake halvah. Bonbon candy pastry danish cake macaroon chocolate.</p>
          <ul className="skillsList">
            { displayCommunities }
          </ul>
        </div>
      </div>
    );
  }
}
