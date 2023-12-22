import { useState, useEffect } from 'react'
import './Card.css'
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import * as queries from "../../graphql/queries";
const client = generateClient();


function Card({user, myRoom}) {
  console.log('users props', user)
  console.log('my room', myRoom?.chatRoomUserTwoId)
  const [room, setRoom]=useState();
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

  // console.log('userConfirm', userConfirm)
  const meId= "f8b1eff4-5013-46c8-a52b-9e278131087d"
  const concatsIds = meId+user?.user?.id
  // const createRomm = async ()=>{
  //   // if(concatsIds ===)
  //   const create = await client.graphql({
  //     query: mutations.createChatRoom,
  //     variables: { input: {chatRoomUserOneId: "f8b1eff4-5013-46c8-a52b-9e278131087d", chatRoomUserTwoId: user?.user?.id, id: concatsIds} }
  //   });
  //   console.log('create', create)
  // }

  useEffect(()=>{
    getUser();
  },[])

  return (
    <>
    {user?

    <button className='card-section'>
        <img className='photo-card' src="/src/assets/user.png" alt="profile photo" />
        <div className='info-card'>
          <h2 className='name-card'>Name: {user?.username}</h2>
        </div>
    </button>
    :
    <button className='card-section'>
        <img className='photo-card' src="/src/assets/user.png" alt="profile photo" />
        <div className='info-card'>
          <h2 className='name-card'>Name: {user2?.username}</h2>
        </div>
    </button>
  }
    </>
  )
}

export default Card
