import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/data"
import { Link } from "react-router-dom"

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex '>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img className="myImg" src={val.cover} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button><Link className="cvBtn" to='https://drive.google.com/file/d/1jE0vVb93cBZDJXTmXN2oj8xC5zmZ6yLJ/view?usp=sharing'>Download CV</Link></button>
                
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}