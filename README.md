# AUTH, CHAT AWS
Proyecto con flujo de creación de usuario, login y una sala de chat con usuarios registrados en la aplicación

## Instrucciones de Instalación
1. Clonar el repositorio: `git@github.com:endyleyms/AWSchat.git`
2. Instala las dependencias: `npm install`
3. Inicia la aplicación: `npm run dev`
3. Inicial Amplify: `amplify init`


## Tecnologías Utilizadas
- AWS AMPLIFY
- Auth (Cognito)
- API Gateway + GraphQL
- DynamoDB para almacenamiento de mensajes, salas de chat y usuarios
- ReactJS para construir la interfaz de usuario

## Funcionalidades del Proyecto
### Autenticación e Inicio de Sesión
El proyecto utiliza Cognito como proveedor de autenticación. El inicio de ses
ión se realiza a través de un formulario simple donde el usuario puede ingresar
su correo electrónico o número de teléfono para iniciar sesión.
Una vez logueado, el usuario es redireccionado a la página
de Chat.
### Creación de Salas de Chat
Después de loguearse correctamente, el usuario tendrá acceso a una lista de usuarios disponibles, estos usuarios son los que se encuentran registrados en la app, con dichos usuarios podrá iniciar una sala de chat
Para crear una nueva sala, debe hacer clic en la card del usuario con quién desea iniciar chat, en
el botón "NEW". Luego, se abrirá en el costado derecho dicha sala, donde se podrá empezar a interactuar, enviando y recibiendo mensajes. La sala o el chat recién creado estará disponible en la lista principal en la parte superior de la página.
Para ingresar al historial de chat especiífico, se podrá accder dando click sobre la card del usuario.

### Deploy vercel
https://aw-schat-e8ucquplc-endyleyms.vercel.app/
