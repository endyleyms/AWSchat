import React, { useEffect, useState } from 'react'
import './Chat.css';
//components
import Header from '../../Components/Header/Header';
import Card from '../../Components/Cards/Card';
import Messages from '../../Components/Messages/Messages';
//aws
import { generateClient } from "aws-amplify/api";
import * as queries from "../../graphql/queries";
import * as mutations from '../../graphql/mutations';
const client = generateClient();


function Chat() {
  const [users, setUsers]=useState();
  const [userMe, setUserMe]=useState();
  const [rooms, setRooms]=useState();
  const [messagesRoom, setMessagesRoom]= useState();
  console.log('messagesRoom',messagesRoom?.messages?.items)
  const [selected, setSelected]= useState();
  const [sendMessage, setSendMessage]= useState();

  const getAllUsers = async () => {
    try {
      const listUsers = await client.graphql({ query: queries.listUsers });
      setUsers(listUsers?.data?.listUsers?.items)
    } catch (error) {
      console.error(error)
    }
  };

  const userId = "f8b1eff4-5013-46c8-a52b-9e278131087d"
  const getMyUser = async () => {
    try {
      const getUser = await client.graphql({ query: queries.getUser, variables: { id: userId }, });
      setUserMe(getUser?.data?.getUser)
    } catch (error) {
      console.error(error)
    }
  };

  const getAllMyRooms = async () => {
    try {
      const listRooms = await client.graphql({ query: queries.listMyRooms });
      setRooms(listRooms?.data?.listChatRooms?.items);
    } catch (error) {
      console.error(error)
    }
  };

  const hanldeSendMessage = async()=>{
    const messages = [...messagesRoom?.messages?.items, sendMessage]
    try {
      const createMessage = await client.graphql({
        query: mutations.sendMessagesRoom,
        variables: { input: {content: sendMessage, messageUserOneId: userId, chatRoomMessagesId:messagesRoom?.id } }
      });
      console.log('data',createMessage)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    getAllUsers();
    getMyUser();
    getAllMyRooms();
  },[])

  return (
    <div className='container-chat'>
      <Header user={userMe}/>
      <div className='body-section'>
        <div className='panel-section'>
          <div className='div-panel'>
            <p>Chats Rooms</p>
            {rooms?
            rooms?.map((room, index)=>{
              return<Card myRoom={room} key={index} setMessagesRoom={setMessagesRoom} setSelected={setSelected}/>
            }):
            <Card/>
            }
          </div>
          <div className='div-panel'>
            <p>Users</p>
            {users?
            users?.map((user, index)=>{
              return<Card user={user} key={index} setMessagesRoom={setMessagesRoom} setSelected={setSelected}/>
            }):
            <Card/>
            }
          </div>
        </div>
        <div className='view-chat-section'>
          {/* <div className='info-chat'>
            <h2 className='text-chat'>Ferney Medina</h2>
          </div> */}
            <div className='messages'>
              {selected ?
              <Messages messagesRoom={messagesRoom}/>
              :
              <Messages/>
              }
            </div>
            {selected &&
            <div className='input-section'>
              <input className='input' placeholder='Write your message' type="text"  value={sendMessage} onChange={(e)=>setSendMessage(e.target.value)}/>
              <button className='send-button' onClick={hanldeSendMessage}>Send</button>
            </div>
            }
        </div>
      </div>
    </div>
  )
}

export default Chat;
