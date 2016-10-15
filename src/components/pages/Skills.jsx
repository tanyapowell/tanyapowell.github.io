import React from 'react';
import { Button, PageHeader } from 'react-bootstrap';

import { skills, socialUrls } from '../../content/content.js';

export default class Skills extends React.Component {
  render() {
    const handleClick = () => {
      window.location.href = socialUrls.linkedinLink;
    };

    const displaySkills = Object.keys(skills).map((key, index) => {
      return (
        <li key={index} >{skills[key]}</li>
      );
    });

    return (
      <div id="skills-background">
        <div className="skills">
          <PageHeader>Skills</PageHeader>
          <p>Tart cupcake marshmallow powder powder ice cream. Pastry bear claw marzipan sugar plum tart powder biscuit. Wafer dragée gummies cookie brownie cotton candy lemon drops. Brownie donut gingerbread cake dessert.</p>
          <ul className="skillsList">
            { displaySkills }
          </ul>
          <Button bsSize="large" onClick={ handleClick } className="draw meet">Connect with me</Button>
        </div>
      </div>
    );
  }
}
