import React from 'react'
import Buttondesign from './Button'
import { Link } from 'react-router-dom'
const ButtonList = () => {
  const buttonNames=["all","TamilCinema","Music","Mixes","Anirudh","Programming","Trailers","Live","Anime","soccer","telugu","roasting","gaming"]
  return (
    <div className='flex px-2 m-1'>
      {
        buttonNames.map((item,index)=>{
          return <Link to={"/results?search_query="+item} key={index} ><Buttondesign  name={item}/></Link>
        })

      }
    </div>
  )
}

export default ButtonList