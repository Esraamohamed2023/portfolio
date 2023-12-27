import React from 'react'
import"./Portfolio.css"
import port1 from"../../Images/port1.jpg"
import port2 from"../../Images/port5.jpg"
import port3 from"../../Images/port3.jpg"
import port4 from"../../Images/port4.jpg"
import port5 from"../../Images/port5.jpg"
export default function Portfolio() {
  return (
    <section id="Portfolio">
   
    <h2>Portfolio</h2>
    <div className="container portfolio_container">
    <article className='portfolio_item' data-aos="fade-left">
    <div className="portfolio_item-image">
    
    </div>
    <h3>Burger Website</h3>
    <div className="portfolio_item-cta">
    <a href="https://github.com" className='btn' target="_blank">Gighub</a>
    <a href="https://esraamohamed2023.github.io/Task-10024/" className='btn btn-primary' target="_blank">Live Demo</a>
    </div>
    </article>
  <article className='portfolio_item' data-aos="fade-left">
    <div className="portfolio_item-image">
   
    </div>
    <h3>Ecommerce Website</h3>
    <div className="portfolio_item-cta">
    <a href="https://github.com/Esraamohamed2023/ecommerce" className='btn' target="_blank">Gighub</a>
    <a href="http://zesty-smile.surge.sh/" className='btn btn-primary' target="_blank">Live Demo</a>
    </div>
    </article>





    <article className='portfolio_item' data-aos="fade-right">
    <div className="portfolio_item-image">
   
    </div>
    <h3>Bootstrap_project</h3>
    <div className="portfolio_item-cta">
    <a href="" className='btn' target="_blank">Gighub</a>
    <a href="https://esraamohamed2023.github.io/Bootstrap_project/" className='btn btn-primary' target="_blank">Live Demo</a>
    </div>
    
    </article>
    <article className='portfolio_item' data-aos="fade-up">
    <div className="portfolio_item-image">
   
    </div>
    <h3>Dessert_project</h3>
    <div className="portfolio_item-cta">
    <a href="https://github.com" className='btn' target="_blank">Gighub</a>
    <a href="https://esraamohamed2023.github.io/dessert_project/" className='btn btn-primary' target="_blank">Live Demo</a>
    </div>
    </article>

<article className='portfolio_item' data-aos="fade-up">
    <div className="portfolio_item-image">
   
    </div>
    <h3>Dashboard</h3>
    <div className="portfolio_item-cta">
    <a href="https://github.com/Esraamohamed2023/dashboard" className='btn' target="_blank">Gighub</a>
    <a href="https://esraamohamed2023.github.io/dessert_project/" className='btn btn-primary' target="_blank">Live Demo</a>
    </div>
    </article>
    <article className='portfolio_item' data-aos="fade-down">
    <div className="portfolio_item-image">
   
    </div>
    <h3>Ticket</h3>

    <div className="portfolio_item-cta">
    <a href="Esraamohamed2023/Login" className='btn' target="_blank">Gighub</a>
    <a href="https://esraamohamed2023.github.io/ticket/" className='btn btn-primary' target="_blank">Live Demo</a>
    </div>

    </article>
    </div>
    
    
    </section>
  )
}
