import React from 'react';
import { Button, PageHeader } from 'react-bootstrap';

import { skills, social } from '../../content/content.js';

export default class Skills extends React.Component {
  render() {
    const handleClick = () => {
      window.location.href = social.linkedin;
    };

    const displaySkills = Object.keys(skills.languages).map((key, index) => {
      return (
        <li key={index} className={'devicons devicons-' + key} >{ ' ' + skills.languages[key] }</li>
      );
    });

    return (
      <div id="skills-background">
        <div className="skills">
          <PageHeader>Technical Skills</PageHeader>
          <p className="justified">{ skills.content.intro }</p>
          <p className="center">{ skills.content.main }</p>
          <ul className="skillsList">
            { displaySkills }
          </ul>
          <Button bsSize="large" onClick={ handleClick } className="draw meet">Connect on LinkedIn</Button>
        </div>
      </div>
    );
  }
}
