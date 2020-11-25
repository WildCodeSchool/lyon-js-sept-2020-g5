import React, { useState } from 'react';
import '../Style/ContactUs.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ContactUs = () => {

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });  
  
  const { register, handleSubmit, reset: restFrom } = useForm();
  const onSubmit = (data) => {
    axios
      .post(
        `https://wild-test.herokuapp.com/contact?apiKey=${window.apiKey}`,
        data
      )
      .then(() => {
        alert(`Your message has been successfully sent ${inputs.firstName}`);
        restFrom();
      })
      .catch(console.error);
  };

  

  const handleInputChange = (e) => {
    setInputs((newInputs) => ({
      ...newInputs,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="contact-title">Contact form </h1>

        <input
          className="contact-input"
          placeholder="Firstname"
          onChange={(e) => handleInputChange(e)}
          value={inputs.firstName}
          name="firstName"
          maxLength="50"
          required
          ref={register}
        />

        <input
          className="contact-input"
          placeholder="Lastname"
          onChange={(e) => handleInputChange(e)}
          value={inputs.lastName}
          name="lastName"
          maxLength="50"
          required
          ref={register}
        />
        <input
          className="contact-input"
          placeholder="Email"
          onChange={(e) => handleInputChange(e)}
          value={inputs.email}
          name="email"
          type="email"
          maxLength="50"
          required
          ref={register}
        />

        <textarea
          className="contact-textarea"
          placeholder="Message"
          onChange={(e) => handleInputChange(e)}
          value={inputs.message}
          required
          name="message"
          maxLength="550"
          type="text"
          ref={register}
        />

        <button className="btn-contact" type="submit">
          Send your message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;

/* import "./App.css";
import { useForm } from "react-hook-form";
import axios from "axios";

function App() {
  

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" required placeholder="Nom" ref={register} />
        <input
          name="email"
          required
          type="email"
          placeholder="Email"
          ref={register}
        />
        <textarea
          name="message"
          required
          placeholder="Message"
          ref={register}
        ></textarea>
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App; */
