import React from 'react'
import"./Experience.css"
import{BsPatchCheckFill}from"react-icons/bs"
export default function Experience() {
  return (
    <section id="Experience"  >
    <h5>What Skills I have</h5>
    <h2>My Experience</h2>
    <div className='Experience' data-aos="fade-up">
    <div className="container experience_container">
    <div className="experience_frontend">
    <h3>Frontend Development</h3>
    <div className="experience_content">
    <article className='experience_details'>
    <BsPatchCheckFill className='experience_details-icon'/>
    <div> <h4>HTML</h4>
    <small className='text-light'>Experienced</small></div>
   
    </article>
    <article className='experience_details'>
    <BsPatchCheckFill className='experience_details-icon'/>
    <div><h4>CSS</h4>
    <small className='text-light'>Intermediate</small></div>
    </article>
    <article className='experience_details'>
    <BsPatchCheckFill className='experience_details-icon'/>
   <div> <h4>JavaScript</h4>
   <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience_details'>
    <BsPatchCheckFill className='experience_details-icon'/>
   <div> <h4>Bootstrap</h4>
   <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience_details'>
    <BsPatchCheckFill className='experience_details-icon'/>
   <div> <h4>React</h4>
   <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience_details'>
    <BsPatchCheckFill className='experience_details-icon'/>
   <div> <h4>Figma</h4>
   <small className='text-light'>Experienced</small></div>
    </article>
    </div>
    </div>
 <div className="experience_frontend">
    <h3>Backend Development</h3>
    <div className="experience_content">
    <article className='experience_details'>
    <BsPatchCheckFill className='experience_details-icon'/>
    <div> <h4>PHP /OOP</h4>
    <small className='text-light'>Experienced</small></div>
   
    </article>
    <article className='experience_details'>
    <BsPatchCheckFill className='experience_details-icon'/>
    <div><h4>Mysql</h4>
    <small className='text-light'>Experienced </small></div>
    </article>
    <article className='experience_details'>
    <BsPatchCheckFill className='experience_details-icon'/>
   <div> <h4>Laravel</h4>
   <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience_details'>
    <BsPatchCheckFill className='experience_details-icon'/>
   <div> <h4>Bootstrap</h4>
   <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience_details'>
    <BsPatchCheckFill className='experience_details-icon'/>
   <div> <h4>Tailwind</h4>
   <small className='text-light'>Experienced</small></div>
    </article>
    <article className='experience_details'>
    <BsPatchCheckFill className='experience_details-icon'/>
   <div> <h4>React</h4>
   <small className='text-light'>Experienced</small></div>
    </article>
    </div>
    </div>
    </div>
    </div>
    </section>
  )
}
