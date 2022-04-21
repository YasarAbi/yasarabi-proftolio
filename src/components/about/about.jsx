import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='hakkimda'>
      <h5>Hadi! Biraz beni tanıyalım.</h5>
      <h2>BEN KİMİM?</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="Yaşar Karaali" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Deneyim süresi</h5>
              <small>5+ seneyi aşkın süredir bilgisayar teknolojileri üzerinde araştırmalar, 1 seneyi aşkın süredir projeler oluşturmaktayım.</small>
            </article>
            
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Müşteriler</h5>
              <small>Yurtiçinde 10'un üzerinde, ülkelerarası ise 5'ten fazla müşterim bulunmakta.</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projeler</h5>
              <small>Profesyonel işlere adım atamamakla birlikte amatör çalışmalarım müşterilerimi her zaman memnun etmiştir!</small>
            </article>
            
          </div>

          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer diam nibh, fringilla sit amet feugiat eu, gravida eu lacus. Vivamus auctor justo a eros malesuada, non scelerisque purus placerat. Maecenas rhoncus velit eget est consequat, nec scelerisque libero sagittis. Donec tempor augue nunc, et mollis diam luctus tincidunt. Duis lobortis nisi sapien, a scelerisque augue accumsan et. Morbi vitae diam quis magna mollis tincidunt. Aenean eu dapibus tellus, sit amet posuere est.
          </p>

          <a href="#iletisim" className='btn btn-primary'>İletişim</a>

        </div>
      </div>
    </section>
  )
}

export default About