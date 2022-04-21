import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiDiscord} from 'react-icons/si'

const headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/" target='_blank'><BsGithub /></a>
        <a href="https://discord.com/" target='_blank'><SiDiscord /></a>
        
    </div>
  )
}

export default headersocials