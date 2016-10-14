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
      <div>
        <PageHeader>Open Source Communities</PageHeader>
        <ul>
          { displayCommunities }
        </ul>
      </div>
    );
  }
}
