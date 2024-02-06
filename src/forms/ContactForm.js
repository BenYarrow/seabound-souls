import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

export const ContactForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        const serviceId = 'service_yzgwrlt'
        const templateId = 'template_n2judga'
        const publicKey = 'IQepkdoYDompauO4V'

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Ben and Rachel',
            message: message,
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully', message)
                setName('')
                setEmail('')
                setMessage('')
            })
            .catch((error) => {
                console.log('Error sending email', error)
            })
    }

    return (
        <form onSubmit={handleSubmit} className='emailForm'>
            <input
                type='text'
                placeholder='Your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type='text'
                placeholder='Your email'
                value={name}
                onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
                cols="30"
                rows="10"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            >

            </textarea>
            <button type='submit'>Send email</button>
        </form>
    )
}

export default ContactForm


