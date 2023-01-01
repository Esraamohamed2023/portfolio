import React from 'react'
import"./Service.css"
import{BiCheckDouble}from"react-icons/bi"
export default function Service() {
  return (
    <section id="Service" data-aos="fade-left">
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className='container services_container'>
    <article className='services'>
    <div className="service_head">
    <h3> Frontend Web Development</h3>
    </div>
    <ul className='services_list'>
    <li>
    <BiCheckDouble className='services_list-icon'/>
    <p>Ui&UX Development</p>
    </li>
    <li>
    <BiCheckDouble className='services_list-icon'/>
    <p>Custom Development</p>
    </li>
    <li>
    <BiCheckDouble className='services_list-icon'/>
    <p>Maintenance&Support</p>
    </li>
   
    </ul>
    </article>
    <article className='services'>
    <div className="service_head">
    <h3>Content Creation</h3>
    </div>
    <ul className='services_list'>
    <li>
    <BiCheckDouble className='services_list-icon'/>
    <p>Responsive Design</p>
    </li>
    <li>
    <BiCheckDouble className='services_list-icon'/>
    <p>Test Website for usability</p>
    </li>
    <li>
    <BiCheckDouble className='services_list-icon'/>
    <p>Performance Optimization</p>
    </li>
    </ul>
    </article>
    </div>
    
    </section>
  )
}
