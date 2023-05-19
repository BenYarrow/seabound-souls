import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Css/Contact-Us.css';


const ContactUs = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5w3yz3d', 'template_2vjlsqn', form.current, 'iZx_RyLr0vI8W72Xu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};


export default ContactUs;


