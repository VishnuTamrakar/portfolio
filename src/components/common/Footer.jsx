import React from "react"
import { social } from "../data/data"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
           <Link to={item.link} target="_blank" > <i data-aos='zoom-in'>{item.icon}</i> </Link>
          </>
        ))}
        <p data-aos='zoom-in'>All Right Resceved 2018</p>
      </footer>
    </>
  )
}

export default Footer