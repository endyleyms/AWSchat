import React from 'react'
import './Header.css';

function Header({user, signOut}) {
  return (
    <div className='header-section'>
      <header className='header'>
        <img className='logo-image' src="/src/assets/header-logo.webp" alt="logo" />
        <button className='user-section'>
          <img className='user-image' src="/src/assets/user.png" alt="profile photo" />
          <h1 className='name'>{user.username}</h1>
        </button>
        <button onClick={signOut}>Sign out</button>
      </header>
    </div>
  )
}

export default Header;
