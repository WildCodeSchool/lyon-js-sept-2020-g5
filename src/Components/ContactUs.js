import React from 'react';
import '../style/ContactUs.css'

const ContactUs = () => {
  return (

    <div className="form-container">
    <form className="form">
      <h1 className="contact-title">Contact form </h1>

      
      <input className="contact-input"  placeholder="name" />

      <input className="contact-input" placeholder="email" />

      <textarea className="contact-textarea" placeholder="Message" />

      <button className="btn-contact" type="submit">Send your message</button>


    </form>

    </div>
      
  );
};

export default ContactUs;
