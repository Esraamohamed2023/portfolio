import React, { useState } from 'react'
import"./Nav.css"
import{AiOutlineHome,AiOutlineUser}from"react-icons/ai"
import{BiBook,BiMessageSquareDetail}from"react-icons/bi"
import{RiServiceLine}from"react-icons/ri"

export default function Nav() {
  const[activenav,setactivenav]=useState("#")
  return (
    <nav>
    
    <a href='#' className={activenav==="#"?"active":""}><AiOutlineHome/></a>
    <a href='#About' onClick={()=>{setactivenav("#About")}} className={activenav==="#About"?"active":""}><AiOutlineUser/></a>
    <a href='#Experience' onClick={()=>{setactivenav("#Experience")}} className={activenav==="#Experience"?"active":""}><BiBook/></a>
    <a href='#Service' onClick={()=>{setactivenav("#Service")}} className={activenav==="#Service"?"active":""}><RiServiceLine/></a>
    <a href='#Contact' onClick={()=>{setactivenav("#Contact")}} className={activenav==="#Contact"?"active":""}><BiMessageSquareDetail/></a>
    
    </nav>
  )
}
