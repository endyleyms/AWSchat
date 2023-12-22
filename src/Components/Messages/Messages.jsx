import React from 'react';
import './Messages.css';

function Messages({messagesRoom}) {
  const messages = messagesRoom?.messages?.items
  const sortedData = messages.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

  const meId= "f8b1eff4-5013-46c8-a52b-9e278131087d"
  return (
    <>
      {messagesRoom?
      <div className="chat-messages">
        {sortedData.map((message, index)=>{
          return(
            <>
            {message?.messageUserOneId === meId ?
            <div className="message-sent" key={index}>
              <div></div>
              <div className="message-content-sent">
                <p>{message?.content}</p>
              </div>
            </div>
            :
            <div className="message-received">
              <div className="message-content-received">
                <p>{message?.content}</p>
              </div>
              <div></div>
            </div>
          }
            </>
          )
        })}
        </div>
        :
        <p>Select a chat</p>
      }
    </>
  )
}

export default Messages
