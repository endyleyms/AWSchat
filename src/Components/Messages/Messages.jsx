import React from 'react';
import './Messages.css';

function Messages() {
  return (
    <div class="chat-messages">
      <div class="message-sent">
        <div></div>
        <div class="message-content-sent">
          <p>Tu mensaje enviado</p>
        </div>
      </div>
      <div class="message-received">
        <div class="message-content-received">
          <p>Mensaje recibido</p>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Messages
