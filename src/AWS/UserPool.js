import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
} from "amazon-cognito-identity-js";

import { USER_POOL_ID, CLIENT_ID } from "dotenv";

//objeto empleado con las credenciales de userpool y el client id de aws cognito
const poolData = {
  UserPoolId: "us-east-1_y36bv10TN",
  ClientId: "77h1rbv91rj1gaj6kgtncclfb7",
};
export default new CognitoUserPool(poolData);

//toma una lista de atributos y devuelve una nueva lista donde cada atributo ha sido convertido en una instancia de la clase CognitoUserAttribute
export const getAttributeList = (attributes = []) => {
  return attributes.map((attribute) => new CognitoUserAttribute(attribute));
};

//funcion para confirmar el registro
export const getCognitoUser = (username) => {
  const userData = {
    Username: username,
    Pool: new CognitoUserPool(poolData),
  };

  return new CognitoUser(userData);
};
