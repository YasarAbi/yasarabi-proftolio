import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#hakkimda" onClick={() => setActiveNav('#hakkimda')} className={activeNav === '#hakkimda' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#deneyimler" onClick={() => setActiveNav('#deneyimler')} className={activeNav === '#deneyimler' ? 'active' : ''}><BiBook/></a>
      <a href="#servisler" onClick={() => setActiveNav('#servisler')} className={activeNav === '#servisler' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#iletisim" onClick={() => setActiveNav('#iletisim')} className={activeNav === '#iletisim' ? 'active' : ''}><BiMessageSquareDetail/></a>
      
    </nav>
  )
}

export default Nav