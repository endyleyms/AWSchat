import { useState, useEffect } from 'react'
import './Card.css'
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import * as queries from "../../graphql/queries";
const client = generateClient();


function Card({user, myRoom, setMessagesRoom, setSelected}) {
  const [roomMessages, setRoomMessages]=useState();
  const [user2, setUser2]=useState();
  //trae los usuarios con los que tengo una sala de chat
  const getUser = async () => {
    const userId = myRoom?.chatRoomUserTwoId
    try {
      const getUser = await client.graphql({ query: queries.getUser, variables: { id: userId }, });
      setUser2(getUser?.data?.getUser)
    } catch (error) {
      console.error(error)
    }
  };

  const meId= "f8b1eff4-5013-46c8-a52b-9e278131087d"
  const concatsIds = meId+user?.id

  const createRomm = async ()=>{
    try {
      const create = await client.graphql({
        query: mutations.createChatRoom,
        variables: { input: {chatRoomUserOneId: meId, chatRoomUserTwoId: user?.id, id: concatsIds} }
      });
      console.log('se creo el room', create)
    } catch (error) {
      console.error(error)
    }
  }

  const getMessages = async ()=>{
    try {
      const getChatRoom = await client.graphql({ query: queries.listMessagesByRoom, variables: { id: myRoom?.id }, });
      setRoomMessages(getChatRoom?.data?.getChatRoom)
    } catch (error) {
      console.error(error)
    }
  }

  const handleClick = () => {
    const dataToSend = roomMessages;
    setMessagesRoom(dataToSend);
    setSelected(true)
  };

  useEffect(()=>{
    getUser();
    getMessages();
  },[])

  return (
    <>
    {user?
    <div className='card-section'>
      <button className='button-card' onClick={handleClick}>
          <img className='photo-card' src="https://banner2.cleanpng.com/20180728/sac/kisspng-computer-icons-user-symbol-light-client-icon-5b5cfd0bbe3066.907360791532820747779.jpg" alt="profile photo" />
          <div className='info-card'>
            <h2 className='name-card'>Name: {user?.username}</h2>
          </div>
      </button>
      <button className='button-chat' onClick={createRomm}>New</button>
    </div>
    :
    <button className='card-section' onClick={handleClick}>
        <img className='photo-card' src="https://banner2.cleanpng.com/20180728/sac/kisspng-computer-icons-user-symbol-light-client-icon-5b5cfd0bbe3066.907360791532820747779.jpg" alt="profile photo" />
        <div className='info-card'>
          <h2 className='name-card'>Name: {user2?.username}</h2>
        </div>
    </button>
  }
    </>
  )
}

export default Card
