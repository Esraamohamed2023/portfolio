import React,{useState} from 'react'
import"./About.css"
import wup from"../../Images/wup.jpeg"
import {FaAward}from"react-icons/fa"
import {FiUsers}from"react-icons/fi"
import {VscFolderLibrary}from"react-icons/vsc"
import Scroll from '../Scroll/Scroll'

export default function About() {
  const[idn,setid]=useState("#")
  
  return (
  <section id="About"  >
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about_container">
    <div className="about_me">
    <div className="about_me-image" data-aos="fade-right">
    <img src={wup} />
    </div>
    
    </div>
    <div className="about_content" >
    <div className="about_cards">
    <article className='about_card' data-aos="fade-up">
    <FaAward className='about_icon'/>
    <h5>Experience</h5>
    <small>1+ Year Working</small>
    </article>
    <article className='about_card' data-aos="fade-down">
    <FiUsers className='about_icon'/>
    <h5>Clients</h5>
    <small>+ Worldwide</small>
    </article>
    <article className='about_card'data-aos="fade-up">
    <VscFolderLibrary className='about_icon'/>
    <h5>Projects</h5>
    <small>10+ Completed</small>
    </article>
    </div>
    <p data-aos="fade-right">i'm an experience frontend developer,with more than 1 year hands-on experience in javascript,css,html,reactjs in addition
    to strong development skills in creating a responsive web pages using using React,Bootstrap ,Next,Redux.</p>
    <p data-aos="fade-left">i'm quietly confident ,naturally curious,and perpetually working on improving my skills
    and increasing my knowledgemy joy is to learn about new technologies,always looking for interesting and challenging projects to work on. </p>
   
     <a href='#Contact' className='btn btn-primary' data-aos="fade-up"> Let's Talk</a>
    </div>

    </div>
    </section>
  )
}
