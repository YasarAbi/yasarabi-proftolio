import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiDiscord} from 'react-icons/si'

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Yaşar Karaali</a>

      <ul className='permalinks'>
        <li><a href="#">Anasayfa</a></li>
        <li><a href="#hakkimda">Hakkımda</a></li>
        <li><a href="#deneyimler">Deneyimlerim</a></li>
        <li><a href="#servisler">Servislerim</a></li>
        <li><a href="#portfolyo">Anasayfa</a></li>
        <li><a href="#iletisim">İletişim</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/" target='_blank'><BsGithub /></a>
        <a href="https://discord.com/" target='_blank'><SiDiscord /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Yaşar Karaali tarafından hazırlanmış başlangıç seviye ReactJS uygulaması.</small>
      </div>

    </footer>
  )
}

export default footer