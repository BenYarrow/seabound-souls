import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5w3yz3d",
        "template_2vjlsqn",
        form.current,
        "iZx_RyLr0vI8W72Xu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact-us"
      className="w-full flex flex-col justify-center items-center bg-white   text-sm"
    >
      <div className="w-4/6 flex h-auto pb-4 flex-col items-center justify-center">
        <h1 className=" text-3xl ">Contact us!</h1>
        <p className="text-center">
          If you would like to get in contact with us about anything on our
          page, please send us a message using the form below.
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col w-3/6">
        <div className="flex flex-col pb-8">
          <label className="pb-1">Name:</label>
          <input
            type="text"
            name="from_name"
            className="w-full pl-2 py-1 text-standard bg-blue/50 focus:outline-blue "
            required
          />
        </div>
        <div className="flex flex-col pb-8">
          <label className="pb-1">Email:</label>
          <input
            type="email"
            name="email"
            className="w-full pl-2 py-1 text-standard bg-blue/50 focus:outline-blue "
            required
          />
        </div>
        <div className="flex flex-col pb-8">
          <label className="pb-1">Message:</label>
          <textarea
            name="message"
            className="w-full pl-2 py-1 text-standard bg-blue/50 focus:outline-blue "
            required
          />
        </div>
        <div className="text-center py-4 bg-blue  text-standard text-xl cursor-pointer active:bg-blue/70 active:textblue">
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
