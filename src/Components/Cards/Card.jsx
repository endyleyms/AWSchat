import React from 'react'
import './Card.css'

function Card() {
  return (
    <button className='card-section'>
        <img className='photo-card' src="/src/assets/user.png" alt="profile photo" />
        <h2 className='name-card'>Name</h2>
    </button>
  )
}

export default Card
