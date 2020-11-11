import React, { useState } from 'react';
import '../Style/ContactUs.css';

const ContactUs = () => {
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setInputs((newInputs) => ({
      ...newInputs,
      [e.target.name]: e.target.value,
    }));
  };

  const sendMessage = (e) => {
    e.preventDefault();

    window.alert(
      `Thank you ${inputs.firstName} ${inputs.lastName} your message has been sent.`
    );
  };
  return (
    <div className="form-container">
      <form className="form" onSubmit={sendMessage}>
        <h1 className="contact-title">Contact form </h1>

        <input
          className="contact-input"
          placeholder="Firstname"
          onChange={(e) => handleInputChange(e)}
          value={inputs.firstName}
          name="firstName"
          maxLength="50"
          required
        />

        <input
          className="contact-input"
          placeholder="Lastname"
          onChange={(e) => handleInputChange(e)}
          value={inputs.lastName}
          name="lastName"
          maxLength="50"
          required
        />
        <input
          className="contact-input"
          placeholder="email"
          onChange={(e) => handleInputChange(e)}
          value={inputs.email}
          name="email"
          type="email"
          maxLength="50"
          required
        />

        <textarea
          className="contact-textarea"
          placeholder="message"
          onChange={(e) => handleInputChange(e)}
          value={inputs.message}
          required
          name="message"
          maxLength="550"
          type="text"
        />

        <button className="btn-contact" type="submit">
          Send your message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
