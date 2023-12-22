import React, { useEffect, useState } from 'react'
import './Chat.css';
//components
import Header from '../../Components/Header/Header';
import Card from '../../Components/Cards/Card';
import Messages from '../../Components/Messages/Messages';
//aws
import { generateClient } from "aws-amplify/api";
import * as queries from "../../graphql/queries";
const client = generateClient();

function Chat() {

  const [users, setUsers]=useState();
  const getAllUsers = async () => {
    const listUsers = await client.graphql({ query: queries.listUsers });
    setUsers(listUsers?.data?.listUsers?.items)
  };

  useEffect(()=>{
    getAllUsers();
  },[])
  return (
    <div className='container-chat'>
      <Header/>
      <div className='body-section'>
        <div className='panel-section'>
          {users?
          users?.map((user, index)=>{
            return<Card user={user} key={index}/>
          }):
          <Card/>
          }
        </div>
        <div className='view-chat-section'>
          {/* <div className='info-chat'>
            <h2 className='text-chat'>Ferney Medina</h2>
          </div> */}
            <div className='messages'>
              <Messages/>
            </div>
            <div className='input-section'>
              <input className='input' placeholder='Write your message' type="text" />
              <button className='send-button'>Send</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Chat;
