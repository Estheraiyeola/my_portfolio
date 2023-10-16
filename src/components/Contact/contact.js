import React, { useRef } from 'react';
import './contact.css';
import Facebook from '../../assets/facebook.png';
import Twitter from '../../assets/x.jpeg';
import Microsoft from '../../assets/microsoft.png';
import Google from '../../assets/google.png';
import Semicolon from '../../assets/semicolon.jpeg';
import FacebookIcon from '../../assets/facebook-icon.jpeg';
import TwitterIcon from '../../assets/twitter-icon.png';
import LinkedInIcon from '../../assets/linkedin-icon.png';
import GmailIcon from '../../assets/gmail-icon.png';
import InstagramIcon from '../../assets/instagram-icon.jpeg';
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();
    
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ku4bld9', 'template_3qq4xle', form.current, 'VC96-OTq_Ig9_FULE')
        .then((result) => {
            console.log("Email response --> ",result.text);
            e.target.reset();
            alert('Email Sent !')
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <section id='contactPage'>
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes:
            </p>
        </div>
        <div className='clientImgs'>
            <img src={Facebook} alt='Client' className='clientImg'/>
            <img src={Twitter} alt='Client' className='clientImg'/>
            <img src={Microsoft} alt='Client' className='clientImg'/>
            <img src={Google} alt='Client' className='clientImg'/>
            <img src={Semicolon} alt='Client' className='clientImg'/>


        </div>
        <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your name' name='your_name'/>
                <input type='email' className='email' placeholder='Your email' name='your_email' />
                <textarea className='msg' name='message' rows={5} placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className='submitBtn'>Submit</button>
                <div className='links'>
                    <img src={FacebookIcon} alt='facebook'className='link' />
                    <img src={LinkedInIcon} alt='linkedin'className='link' />
                    <img src={TwitterIcon} alt='twitter'className='link' />
                    <img src={GmailIcon} alt='gmail'className='link' />
                    <img src={InstagramIcon} alt='instagram'className='link'  />

                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
