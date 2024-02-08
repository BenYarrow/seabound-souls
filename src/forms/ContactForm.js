import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_yzgwrlt';
        const templateId = 'template_n2judga';
        const publicKey = 'IQepkdoYDompauO4V';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Ben and Rachel',
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully', response);
                setShowSuccessMessage(true);
                setName('');
                setEmail('');
                setMessage('');
                setTimeout(() => setShowSuccessMessage(false), 5000); // Hide the success message after 5 seconds
            })
            .catch((error) => {
                console.log('Error sending email', error);
            });
    };

    return (
        <div className="flex flex-col gap-y-4">
            <form onSubmit={handleSubmit} className='emailForm flex flex-col gap-y-6'>
                <input
                    type='text'
                    placeholder='Your name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="p-2 bg-blue text-white placeholder:text-blue-lighter"
                />
                <input
                    type='text'
                    placeholder='Your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="p-2 bg-blue text-white placeholder:text-blue-lighter"
                />
                <textarea
                    cols="30"
                    rows="10"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-white p-2 bg-blue"
                />
                <button type='submit' className="relative px-8 py-2 bg-blue text-xl text-white uppercase after:absolute after:bottom-0 after:right-0 after:h-[2px] after:w-0 hover:after:w-full hover:after:left-0 after:bg-white after:transition-all after:duration-300">
                    Send email
                </button>
            </form>
            {showSuccessMessage && (
                <div className="bg-blue py-2 flex items-center justify-center gap-2">
                    <p className='text-white text-center'>
                        Your message has been sent successfully!
                    </p>
                    <FontAwesomeIcon icon={faCheck} className="text-white"/>
                </div>
            )}
        </div>
    );
};

export default ContactForm;