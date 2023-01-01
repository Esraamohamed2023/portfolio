import React from 'react'
import cv from"../../Images/cv.pdf"

export default function CTA() {
  return (
    <div className='cta'>
      <a href={cv} download className='btn'>Download CV</a>
      <a href='#Contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
