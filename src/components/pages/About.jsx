import React from 'react';
import { Image, PageHeader } from 'react-bootstrap';

import { about, social } from '../../content/content.js';

import Community from './Community.jsx';
import Photography from './Photography.jsx';
import Skills from './Skills.jsx';
import Speaking from './Speaking.jsx';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const words = this.props.words;

    const displaySocial = Object.keys(social).map((key, index) => {
      return (
        <a href={ social[key] } key={index}>
          <i className={'fa fa-' + key + ' fa-3x'} aria-hidden="true"/>
        </a>
        );
    });

    return (
      <div>
        <div id="about-background">
          <div className="about">
            <PageHeader>Hi there!</PageHeader>
            <Image src={ about.headshot } alt="Tanya Powell" circle/>
            <h3>My name is Tanya and I am <span className="dynamic-words">{ words }</span></h3>
            <p>{ about.infoOne }</p>
            <p>{ about.infoTwo }</p>
            <h5>You can find me here</h5>
            <ul>
              { displaySocial }
            </ul>
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

About.propTypes = {
  words: React.PropTypes.string.isRequired
};

export default About;
