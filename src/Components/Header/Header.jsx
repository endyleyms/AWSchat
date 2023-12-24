import React from 'react'
import './Header.css';

function Header({user}) {
  return (
    <div className='header-section'>
      <header className='header'>
        <img className='logo-image' src="https://www.nuatechnology.com/hubfs/image.png" alt="logo" />
        <button className='user-section'>
          <img className='user-image' src="https://banner2.cleanpng.com/20180728/sac/kisspng-computer-icons-user-symbol-light-client-icon-5b5cfd0bbe3066.907360791532820747779.jpg" alt="profile photo" />
          <h1 className='name'>{user?.username}</h1>
        </button>
      </header>
    </div>
  )
}

export default Header;
