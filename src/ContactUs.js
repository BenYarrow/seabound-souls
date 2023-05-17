import React from 'react';
import './Css/Contact-Us.css';

const ContactUs = () => {
  return (
    <div id='contact-us' className='w-full bg-standard flex justify-center'>
      <div className='flex items-center'>
      <form
      action=''
      onSubmit=''
      method=''
      target=''
    >
      <div className="mb-4 pt-0">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          className="px-4 py-4 text-gray-600  bg-white rounded-lg text-sm w-full"
          required
        />
      </div>
      <div className="mb-4 pt-0">
        <input
          type="email"
          placeholder="Your email address"
          name="email"
          className="px-4 py-4 text-gray-600 bg-white rounded-lg text-sm w-full"
          required
        />
      </div>
      <div className="mb-4 pt-0">
        <textarea
          placeholder="Your message"
          name="message"
          className="px-4 py-4 placeholder-gray-400 text-gray-600 bg-white rounded-lg text-sm w-full"
          required
        />
      </div>
      <div className="mb-4 pt-0 ">
        <button
          className="bg-slate-600 text-slate-200 active:bg-slate-400 active:text-slate-600 font-bold uppercase text-sm px-8 py-4 rounded-lg ease-linear transition-all duration-150"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
    
      </div>
    </div>
  )
}

export default ContactUs;