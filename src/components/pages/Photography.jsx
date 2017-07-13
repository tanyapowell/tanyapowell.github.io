import React from 'react';
import { Button, Col, Image, PageHeader } from 'react-bootstrap';

import { photography } from '../../content/content.js';

export default class Photography extends React.Component {

  render() {
    const handleClick = () => {
      window.location.href = 'https://flickr.com/tantan85';
    };

    const displayPhotos =  Object.keys(photography.pics).map((key, index) => {
      return (
        <Col xs={12} md={6} sm={6} className="" key={ index }>
          <Image alt={ photography.pics } src= { photography.pics[key]} thumbnail/>
        </Col>
      );
    });

    return (
      <div id="photography-background">
        <div className="photography">
          <PageHeader>Photography</PageHeader>
            { displayPhotos }
          <Button bsSize="large" onClick={ handleClick } className="draw meet">See more photos </Button>
        </div>
      </div>
    );
  }
}
