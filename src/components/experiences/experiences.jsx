import React from 'react'
import './experiences.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experiences = () => {
  return (
    <section id='deneyimler'>
      <h5>Hangi alanlarda ilerliyorum?</h5>
      <h2>Deneyimlerim</h2>

      <div className="container experience__container">
        {/* FRONTEND BAŞLANGIÇ */}
        <div className="experience__frontend">
          <h3>FrontEnd Deneyimlerim</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Deneyimli</small>
              </div>
              
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Deneyimli</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Başlangıç</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>BOOTSTRAP</h4>
                <small className='text-light'>Başlangıç</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>REACT</h4>
                <small className='text-light'>Başlangıç</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>WORDPRESS</h4>
                <small className='text-light'>Deneyimli</small>
              </div>
            </article>
          </div>
        </div>
        {/* FRONTEND BİTİŞ */}

        {/* BACKEND BAŞLANGIÇ */}
        <div className="experience__backend">
        <h3>BackEnd Deneyimlerim</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Deneyimli</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Deneyimli</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Başlangıç</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>BOOTSTRAP</h4>
                <small className='text-light'>Başlangıç</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>REACT</h4>
                <small className='text-light'>Başlangıç</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>WORDPRESS</h4>
                <small className='text-light'>Deneyimli</small>
              </div>
            </article>
          </div>
          {/* BACKEND BİTİŞ */}
        </div>
      </div>
    </section>
  )
}

export default Experiences