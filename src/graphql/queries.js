/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      id
      userOne {
        id
        username
        email
        createdAt
        updatedAt
        __typename
      }
      userTwo {
        id
        username
        email
        createdAt
        updatedAt
        __typename
      }
      messages {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      chatRoomUserOneId
      chatRoomUserTwoId
      __typename
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        chatRoomUserOneId
        chatRoomUserTwoId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      userOne {
        id
        username
        email
        createdAt
        updatedAt
        __typename
      }
      content
      createdAt
      updatedAt
      chatRoomMessagesId
      messageUserOneId
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        chatRoomMessagesId
        messageUserOneId
        __typename
      }
      nextToken
      __typename
    }
  }
`;

// export const listMyRooms = /* GraphQL */ `
//   query listChatRooms(filter: {chatRoomUserOneId: {eq: "f8b1eff4-5013-46c8-a52b-9e278131087d"}}) {
//     nextToken
//     items {
//       chatRoomUserOneId
//       chatRoomUserTwoId
//       createdAt
//       id
//     }
//   }
// `;
