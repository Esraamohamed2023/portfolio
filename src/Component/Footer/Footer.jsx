import React from 'react'
import"./Footer.css"
import{FaFacebookF,FaTwitter} from"react-icons/fa"
import{FiInstagram} from"react-icons/fi"
export default function Footer() {
  return (
    <footer id="Footer">
      <a href='#' className='footer_logo'>Esraa</a>
      <ul className='permalinks'>
      <li><a href='#'>Home</a></li>
      <li><a href='#About'>About</a></li>
      <li><a href='#Experience'>Experience</a></li>
      <li><a href='#Services'>Services</a></li>
      <li><a href='#Portfolio'>Portfolio</a></li>
      <li><a href='#Contact'>Contact</a></li>
      </ul>
      <div className="footer_socials">
      <a href='https://www.facebook.com/profile.php?id=100004260092180&mibextid=ZbWKwL' target="_blank"><FaFacebookF/></a>
      <a href='https://www.instagram.com/invites/contact/?i=1cl8tsab1jw0o&utm_content=1u9vj05' target="_blank"><FiInstagram/></a>
      <a href='https://twitter.com/EsraaMo25716822?t=cuSaBNu72ONkG-VV5qlPtg&s=09' target="_blank"><FaTwitter/></a>
      </div>
<div className="footer_copyright">
<small>&copy;Esraa Tutorials.All rights reserved</small>
</div>
    </footer>
  )
}
