import React from "react"
import { Heading } from "../common/Heading"
import { services } from "../data/data"

export const Services = () => {
  return (
    <>
      <section className='services'>
        <div className='container'>
          <Heading title='Skills' />
          <div className='content grid3'>
            {services.map((item) => (
              <div className='box' data-aos='flip-left'>
                <h3>{item.title}</h3>
                <div className="skillImg" >
                <img className="img" src={item.img} alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}