import React from 'react';
import { PageHeader } from 'react-bootstrap';

import { about, social } from '../../content/content.js';

import Photography from './Photography.jsx';
import Skills from './Skills.jsx';

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
            <h3 className="center about-dynamic-header">My name is Tanya and I am <span className="dynamic-words">{ words }</span></h3>
            <p className="justified">{ about.infoOne }</p>
            <h5 className="center heading">{ about.infoThree }</h5>
            <div className="center-social"> { displaySocial } </div>
          </div>
        </div>
        <Skills />
        <Photography />
      </div>
    );
  }
}

About.propTypes = {
  words: React.PropTypes.string.isRequired
};

export default About;
