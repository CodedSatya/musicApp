import React from 'react'
import './Details.css'

const Details = ({title, artist, img}) => {
  return (
    <div className='detailContainer'>
      <img src={img} alt="cover" />
      <span className='title'>{title}</span>
      <span className='artist'>{artist}</span>
    </div>
  )
}

export default Details