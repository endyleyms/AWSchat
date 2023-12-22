import React from 'react'
import './Card.css'

function Card(user) {
  console.log(user.user)
  return (
    <button className='card-section'>
        <img className='photo-card' src="/src/assets/user.png" alt="profile photo" />
        <div className='info-card'>
          <h2 className='name-card'>Name: {user?.user?.username}</h2>
        </div>
    </button>
  )
}

export default Card
