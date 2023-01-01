import React from 'react'

export default function Scroll({eventpart}) {
    
  return (
    window.addEventListener("scroll",{eventpart})
  )
}
