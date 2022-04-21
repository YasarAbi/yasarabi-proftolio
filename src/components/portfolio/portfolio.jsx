import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

//Çalışmaların içine resim koyma!

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Denemeler serisi',
    github: 'https://github.com/YasarAbi',
    demo: 'https://github.com/YasarAbi'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Denemeler serisi',
    github: 'https://github.com/YasarAbi',
    demo: 'https://github.com/YasarAbi'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Denemeler serisi',
    github: 'https://github.com/YasarAbi',
    demo: 'https://github.com/YasarAbi'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Denemeler serisi',
    github: 'https://github.com/YasarAbi',
    demo: 'https://github.com/YasarAbi'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Denemeler serisi',
    github: 'https://github.com/YasarAbi',
    demo: 'https://github.com/YasarAbi'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Denemeler serisi',
    github: 'https://github.com/YasarAbi',
    demo: 'https://github.com/YasarAbi'
  },

]

const portfolio = () => {
  return (
    <section id='portfolyo'>
      <h5>Önceki Çalışmalarım</h5>
      <h2>Portfolyo</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>GitHub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Canlı Test</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio