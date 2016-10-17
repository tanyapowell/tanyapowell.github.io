import React from 'react';
import { Button, PageHeader } from 'react-bootstrap';

export default class Photography extends React.Component {

  render() {
    const handleClick = () => {
      window.location.href = 'https://flickr.com/tantan85';
    };

    return (
      <div id="photography-background">
        <div className="photography">
          <PageHeader>Photography</PageHeader>
          <p>Tart cupcake marshmallow powder powder ice cream. Pastry bear claw marzipan sugar plum tart powder biscuit. Wafer dragée gummies cookie brownie cotton candy lemon drops. Brownie donut gingerbread cake dessert.</p>
          <p>Tootsie roll tootsie roll dessert marshmallow. Oat cake gummi bears donut jelly-o powder sweet muffin. Carrot cake soufflé wafer biscuit cupcake pie muffin cake sweet.</p>
          <p>Tart marzipan caramels apple pie toffee biscuit donut. Dessert cotton candy candy canes. Donut chocolate cake halvah. Bonbon candy pastry danish cake macaroon chocolate.</p>
          <Button bsSize="large" onClick={ handleClick } className="draw meet">See more photos</Button>
        </div>
      </div>
    );
  }
}
