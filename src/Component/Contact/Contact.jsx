import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import"./Contact.css"
import{MdOutlineMail}from"react-icons/md"
import{RiMessengerLine}from"react-icons/ri"
import{BsWhatsapp}from"react-icons/bs"
export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fufc4tq', 'template_vpvysfc', form.current, '0sIlFFZXvHVWrfVNk')
   e.target.reset()
  };
  return (
    <section id="Contact" data-aos="fade-up">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact_container">
    <div className="contact_options">
    <article className='contact_option'>
    <MdOutlineMail className='contact_option-icon'/>
    <h4>Email</h4>
    <h5>esraalatef5@gmail.com</h5>
    <a href='mailto:esraalatef@gmail.com' target="_blank">Send a message</a>
    
    </article>
    
    <article className='contact_option'>
    <RiMessengerLine className='contact_option-icon'/>
    <h4>Messenger</h4>
    <h5>Esraa Mohamed</h5>
    <a href='https://www.facebook.com/profile.php?id=100004260092180&mibextid=ZbWKwL' target="_blank">Send a message</a>
    
    </article>
    <article className='contact_option'>
    <BsWhatsapp className='contact_option-icon'/>
    <h4>WhatsApp</h4>
    <h5>+01013915357</h5>
    <a href='https://api.whatsapp.com/send?phone=01013915357' target="_blank">Send a message</a>
    
    </article>
    </div>
    <form ref={form} onSubmit={sendEmail}>
    <input type="text" name="name" placeholder='Your Full Name' required/>
    <input type="email" name="email" placeholder='Your Email' required/>
    <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
    </div>
    
    
    </section>
  )
}
