import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const nav = () => {

  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#hakkimda"><AiOutlineUser/></a>
      <a href="#deneyimler"><BiBook/></a>
      <a href="#servisler"><RiServiceLine/></a>
      <a href="#iletisim"><BiMessageSquareDetail/></a>
      
    </nav>
  )
}

export default nav