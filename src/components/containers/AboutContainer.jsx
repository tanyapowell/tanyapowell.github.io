import React from 'react';

import About from '../pages/About.jsx';

const WORDS = [
  'a software engineer',
  'a Londoner',
  'a photographer',
  'a speaker',
  'a masterchef',
  'a volunteer',
  'a blogger',
];

export default class AboutContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: 0
    };

    this.nextWord = this.nextWord.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.nextWord, 3000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  nextWord() {
    let current = this.state.currentWord;
    const next = ++current % WORDS.length;
    this.setState({ currentWord: next });
  }

  interval: null

  render() {
    const words = WORDS[this.state.currentWord];
    return <About words={ words }/>;
  }
}
