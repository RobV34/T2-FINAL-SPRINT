

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          Feel free to reach out to us if you have any questions or inquiries about our custom clocks.
        </p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>
          
          <button className="contact-submit-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

