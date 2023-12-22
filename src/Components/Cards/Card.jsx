import { useState } from 'react'
import './Card.css'
import { generateClient } from 'aws-amplify/api';
import * as mutations from '../../graphql/mutations';
import * as queries from "../../graphql/queries";
const client = generateClient();


function Card(user) {
  const [room, setRoom]=useState();
  const meId= "f8b1eff4-5013-46c8-a52b-9e278131087d"
  const concatsIds = meId+user?.user?.id
  // const getRoom = async () => {
  //   const getMyRoom = await client.graphql({ query: queries.getChatRoom, variables: {id: concatsIds} });
  //   setRoom(getMyRoom?.data?.getChatRoom?.items)
  // };
  // const createRomm = async ()=>{
  //   // if(concatsIds ===)
  //   const create = await client.graphql({
  //     query: mutations.createChatRoom,
  //     variables: { input: {chatRoomUserOneId: "f8b1eff4-5013-46c8-a52b-9e278131087d", chatRoomUserTwoId: user?.user?.id, id: concatsIds} }
  //   });
  //   console.log('create', create)
  // }

  return (
    <button className='card-section'>
        <img className='photo-card' src="/src/assets/user.png" alt="profile photo" />
        <div className='info-card'>
          <h2 className='name-card'>Name: {user?.user?.username}</h2>
        </div>
    </button>
  )
}

export default Card
