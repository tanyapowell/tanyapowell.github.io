import React from 'react';
import { Image, PageHeader } from 'react-bootstrap';

import { about, social } from '../../content/content.js';

import Community from './Community.jsx';
import Photography from './Photography.jsx';
import Skills from './Skills.jsx';
import Speaking from './Speaking.jsx';

export default class About extends React.Component {
  render() {
    return (
      <div>
        <div id="about-background">
          <div className="about">
            <PageHeader>Tanya is </PageHeader>
            <Image src={ about.headshot } alt="Tanya Powell" circle/>
            <p>{ about.infoOne }</p>
            <p>{ about.infoTwo }</p>
          </div>
        </div>
        <Skills />
        <Community />
        <Speaking />
        <Photography />
      </div>
    );
  }
}
