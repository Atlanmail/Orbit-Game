import { io } from 'socket.io-client';

const Client = {
    socket: io(),
  
    sendTest: () => {
      console.log("test sent");
      Client.socket.emit('test');
    },
  
    askNewPlayer: () => {
      Client.socket.emit('newplayer');
    },
  
    sendClick: (x, y) => {
      Client.socket.emit('click', { x, y });
    }
  };
  
export default Client;