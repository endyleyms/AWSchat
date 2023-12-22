import React from 'react';
import './Messages.css';

function Messages() {
  return (
    <div className="chat-messages">
      <div className="message-sent">
        <div></div>
        <div className="message-content-sent">
          <p>Tu mensaje enviado</p>
        </div>
      </div>
      <div className="message-received">
        <div className="message-content-received">
          <p>Mensaje recibido</p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Messages
