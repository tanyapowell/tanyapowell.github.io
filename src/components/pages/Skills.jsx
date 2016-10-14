import React from 'react';
import { PageHeader } from 'react-bootstrap';

import { skills } from '../../content/content.js';

export default class Skills extends React.Component {
  render() {
    const displaySkills = Object.keys(skills).map((key, index) => {
      return (
        <li key={index} >{skills[key]}</li>
      );
    });

    return (
      <div className="skills">
        <PageHeader>Skills</PageHeader>
        <ul>
          { displaySkills }
        </ul>
      </div>
    );
  }
}
