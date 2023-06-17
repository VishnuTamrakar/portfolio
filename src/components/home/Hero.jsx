import React from "react"
import { home } from "../data/data"
import Typewriter from "typewriter-effect"
import { Link } from "react-router-dom"

export const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContent'>
            <h3 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-left'>{val.desc}</p>
            <button className='primaryBtn' data-aos='fade-up-right'>
              <Link to='https://drive.google.com/file/d/1jE0vVb93cBZDJXTmXN2oj8xC5zmZ6yLJ/view?usp=sharing'>
              Download CV
              </Link>
            </button>
          </div>
        ))}
      </section>
    </>
  )
}