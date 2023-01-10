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
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio_container">
    <article className='portfolio_item' data-aos="fade-left">
    <div className="portfolio_item-image">
    <img src={port1}/>
    </div>
    <h3>Social Media Website</h3>
    <div className="portfolio_item-cta">
    <a href="https://github.com" className='btn' target="_blank">Gighub</a>
    <a href="https://esraamohamed2023.github.io/Social-media/" className='btn btn-primary' target="_blank">Live Demo</a>
    </div>
    </article>
    <article className='portfolio_item' data-aos="fade-right">
    <div className="portfolio_item-image">
    <img src={port5}/>
    </div>
    <h3>social App</h3>
    <div className="portfolio_item-cta">
    <a href="" className='btn' target="_blank">Gighub</a>
    <a href="https://esraamohamed2023.github.io/social-app/" className='btn btn-primary' target="_blank">Live Demo</a>
    </div>
    
    </article>
    <article className='portfolio_item' data-aos="fade-up">
    <div className="portfolio_item-image">
    <img src={port3}/>
    </div>
    <h3>Ecommerce-website</h3>
    <div className="portfolio_item-cta">
    <a href="https://github.com" className='btn' target="_blank">Gighub</a>
    <a href="Esraamohamed2023/ecommerce" className='btn btn-primary' target="_blank">Live Demo</a>
    </div>
    </article>
    <article className='portfolio_item' data-aos="fade-down">
    <div className="portfolio_item-image">
    <img src={port4}/>
    </div>
    <h3>Login card</h3>

    <div className="portfolio_item-cta">
    <a href="Esraamohamed2023/Login" className='btn' target="_blank">Gighub</a>
    <a href="https://esraamohamed2023.github.io/Social-media/" className='btn btn-primary' target="_blank">Live Demo</a>
    </div>
    </article>
    </div>
    
    
    </section>
  )
}
