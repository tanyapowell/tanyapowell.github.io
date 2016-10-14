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
      <div>
        <PageHeader>Talks</PageHeader>
      </div>
    );
  }
}
