import React from 'react';
import { FormGroup, PageHeader } from 'react-bootstrap';

import { socialUrls } from '../../content/content.js';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div>
        <PageHeader>Get in touch with me</PageHeader>
        <p>I usually respond quicker to a <a href={ socialUrls.twitterLink }>tweet</a> but if your message is longer than 140 characters feel free to drop me a message here and I'll get back you to as soon as I can 😊</p>
         <form action="https://formspree.io/hello@tanyapowell.co.uk" method="POST">
           <FormGroup
             controlId="formBasicText"
             validationState={this.getValidationState()}
           >
             <label htmlFor="name">Name:</label>
             <input type="text" name="name" className="form-control" id="name" placeholder="e.g. Bob Smith" required/>
             <label htmlFor="email">Email:</label>
             <input type="email" name="_replyto" className="form-control" id="email" placeholder="e.g. bob@smith.com" required/>
             <label htmlFor="comment">Comment:</label>
             <textarea name="comment" className="form-control" rows="5" id="comment" placeholder="Enter you message here" required/>
           </FormGroup>
           <button type="submit" className="btn btn-default">Submit</button>
         </form>
      </div>
    );
  }
}
