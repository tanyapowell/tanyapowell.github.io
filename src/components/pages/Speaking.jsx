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
          <ul className="skillsList">
            { displayTalks }
          </ul>
        </div>
      </div>
    );
  }
}
