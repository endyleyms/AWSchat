import React from 'react'
import './Chat.css';
import Header from '../../Components/Header/Header';
import Card from '../../Components/Cards/Card';

function Chat() {
  return (
    <div className='container-chat'>
      <Header/>
      <div className='body-section'>
        <div className='panel-section'>
          <Card/>
        </div>
        <div className='view-chat-section'>
          <div className='info-chat'>
            <h2 className='text-chat'>Ferney Medina</h2>
            <div className='input-section'>
              <input className='input' placeholder='Write your message' type="text" />
              <button className='send-button'>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat;
