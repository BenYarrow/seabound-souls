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
    <div id='contact-us' className='w-full flex flex-col justify-center items-center bg-standard font-standard text-turquoise text-sm'>
      <div className='w-4/6 flex h-auto pb-4 flex-col items-center justify-center'>
        <h1 className='text-turquoise text-xxl '>
          Contact us!
        </h1>
        <p className='text-center'>
          If you would like to get in contact with us about anything on our page, please send us a message using the form below.
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className='flex flex-col w-3/6'>
        <div className='flex flex-col pb-8'>
          <label className='pb-1'>Name:</label>
          <input type="text" name="from_name" className='w-full pl-2 py-1 text-standard bg-turquoise/50 focus:outline-turquoise rounded-lg' required/>
        </div>
        <div className='flex flex-col pb-8'>
          <label className='pb-1'>Email:</label>
          <input type="email" name="email"  className='w-full pl-2 py-1 text-standard bg-turquoise/50 focus:outline-turquoise rounded-lg' required/>
        </div>
        <div className='flex flex-col pb-8'>
          <label className='pb-1'>Message:</label>
          <textarea name="message" className='w-full pl-2 py-1 text-standard bg-turquoise/50 focus:outline-turquoise rounded-lg' required/>
        </div>
        <div className='text-center py-4 bg-turquoise rounded-lg text-standard text-xl active:bg-turquoise/70 active:textturquoise'>
          <input type="submit" value="Send" required/>
        </div>
      </form>
    </div>
  );
};


export default ContactUs;


