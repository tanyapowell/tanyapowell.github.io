import React from 'react';
import { Image, PageHeader } from 'react-bootstrap';

import { about, social } from '../../content/content.js';

import Community from './Community.jsx';
import Photography from './Photography.jsx';
import Skills from './Skills.jsx';
import Speaking from './Speaking.jsx';


export default class About extends React.Component {
  render() {
    // const displaySocial = Object.keys(social).map((key, index) => {
    //   return (
    //     <li key={index}>
    //       <Link to={'/' + key}><small>{social[key]}</small></Link>
    //     </li>
    //   );
    // });

    const getWords = function() {
      const words = [' a software engineer', 'a speaker', 'inclusive'];
      let index = 0;

      setInterval(function() {
        if (index === words.length) {
          index = 0;
        }
      }, 5000);
    };

    return (
      <div>
        <PageHeader>Tanya is { getWords }</PageHeader>
        <Image src={ about.headshot } thumbnail/>
        <p>{ about.infoOne }</p>
        <p>{ about.infoTwo }</p>
        <Skills />
        <Community />
        <Speaking />
        <Photography />
      </div>
    );
  }
}
