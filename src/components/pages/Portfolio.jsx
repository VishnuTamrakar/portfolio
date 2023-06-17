import React, { useState } from "react"
import { Heading } from "../common/Heading"
import { portfolio } from "../data/data"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import { Link } from "react-router-dom"

const allCategory = ["all", ...new Set(portfolio.map((item) => item.category))]
export const Portfolio = () => {
  const [list, setLists] = useState(portfolio)
  const [category, setCategory] = useState(allCategory)
  console.log(setCategory)

  const filterItems = (category) => {
    const newItems = portfolio.filter((item) => item.category === category)
    setLists(newItems)
    if (category === "all") {
      setLists(portfolio)
      return
    }
  }

  return (
    <>
      <article>
        <div className='container '>
          <Heading title='Portfolio' />
          <div className='catButton'>
            {category.map((category) => (
              <button className='primaryBtn' onClick={() => filterItems(category)} data-aos='zoom-out-down'>
                {category}
              </button>
            ))}
          </div>
          <div className='content grid3'>
            {list.map((item) => (
              <div className='box' data-aos='fade-up'>
                <div className='img'>
                  <img src={item.cover} alt='' />
                </div>
                <Link style={{color:"#fff"}} to={item.link} target="_blank">
                <div className='overlay'>
                  <h3>{item.name}</h3>
                  <h3><Link target="_blank" style={{color:"#fff"}} to={item.git}> GitHub Link </Link> </h3>
                  <VisibilityOutlinedIcon />
                </div>
              </Link>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}