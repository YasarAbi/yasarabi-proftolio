import React from 'react'
import './header.css'
import CTA from './CTA' 
import ME from '../../assets/me.png'
import HeaderSocials from './headersocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Merhaba! Ben</h5>
        <h1>Yaşar Karaali</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#iletisim" className='scroll__down'>Aşağıya Kaydır -{'>'}</a>

      </div>
    </header>
  )
}

export default header