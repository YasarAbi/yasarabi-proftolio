import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='servisler'>
      <h5>Sizlere ne sunuyorum?</h5>
      <h2>Servislerim</h2>

      <div className="container services__container">
        {/*UI/UX BAŞLANGIÇ*/}
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Dizayn</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/*UI/UX SONU*/}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/*WEB DEVELOPMENT SONU*/}
        <article className='service'>
          <div className="service__head">
            <h3>İçerik Üreticisi</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/*İÇERİK ÜRETİCİSİ SONU*/}
      </div>
    </section>
  )
}

export default Services