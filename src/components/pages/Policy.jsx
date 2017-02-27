import React from 'react';

import policy from '../../content/policy.js';

export default class Policy extends React.Component {
  render() {
    return (
      <div id="community-background">
        <h1>{ policy.title }</h1>
      </div>
    );
  }
}
