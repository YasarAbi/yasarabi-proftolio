import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaDiscord} from 'react-icons/fa'
import {ImWhatsapp} from 'react-icons/im'

const contant = () => {
  return (
    <section id='iletisim'>
      <h5>Konuşma vakti!</h5>
      <h2>Benimle iletişime geç!</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Eposta</h4>
            <h5>yasar4726@hotmail.com</h5>
            <a href="mailto:yasar4726@hotmail.com">Eposta Gönder</a>
          </article>

          <article className='contact__option'>
            <FaDiscord className='contact__option-icon'/>
            <h4>Discord</h4>
            <h5>yasar4726@hotmail.com</h5>
            <a href="https://discordapp.com/users/136151464476278784" target='_blank'>Discord'dan Ulaş</a>
          </article>

          <article className='contact__option'>
            <ImWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>0 552 357 51 95</h5>
            <a href="https://api.whatsapp.com/send/?phone=905523575195&text&app_absent=0" target='_blank'>Whatsapp'tan Yaz</a>
          </article>
          
        </div>
        {/* İLETİŞİM BÖLÜMÜ SONU */}
        <form action="">
          <input type="text" name='İsim' placeholder='Bütün isim ve soyisim' required />
          <input type="email" name='Eposta' placeholder='Eposta adresin' required/>
          <textarea name="message" rows="7" placeholder='Mesajın...' required></textarea>
          <button type='submit' className='btn btn-primary'>Gönder</button>
        </form>
      </div>
    </section>
  )
}

export default contant