import React from 'react';
import { PageHeader } from 'react-bootstrap';

import { speaking } from '../../content/content.js';

export default class Speaking extends React.Component {
  render() {
    const displayTalks = Object.keys(speaking).map((key, index) => {
      return (
        <li key={index} >{speaking[key]}</li>
      );
    });

    return (
      <div id="speaking-background">
        <div className="speaking">
          <PageHeader>Talks</PageHeader>
          <p>Tart cupcake marshmallow powder powder ice cream. Pastry bear claw marzipan sugar plum tart powder biscuit. Wafer dragée gummies cookie brownie cotton candy lemon drops. Brownie donut gingerbread cake dessert.</p>
          <p>Tootsie roll tootsie roll dessert marshmallow. Oat cake gummi bears donut jelly-o powder sweet muffin. Carrot cake soufflé wafer biscuit cupcake pie muffin cake sweet.</p>
          <p>Tart marzipan caramels apple pie toffee biscuit donut. Dessert cotton candy candy canes. Donut chocolate cake halvah. Bonbon candy pastry danish cake macaroon chocolate.</p>
          <ul className="skillsList">
            { displayTalks }
          </ul>
        </div>
      </div>
    );
  }
}
