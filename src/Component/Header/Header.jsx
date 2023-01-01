import React from 'react'
import CTA from './CTA'
import "./Header.css"
import me from"../../Images/me.webp"
import Headersocial from './Headersocial'
export default function Header() {
  return (
<header>
<div className="container header_container">
<h5>Hello I'm</h5>
<h1>Esraa Mohamed</h1>
<h5 className='text-light'>Frontend Developer</h5>
<CTA/>
<Headersocial/>

<div className="me">
<img src={me} alt="me"/>

</div>
<a href='#Contact' className='scroll_down'>Scroll Down</a>
</div>


</header>
  )
}
