const socket = require('socket.io-client')('http://localhost:3005');

export default (function() {

  console.log('hello world from socket');

  socket.on('connect', () => {
    console.log('connected');
  });

  socket.on('news', (data) => {
    console.log('news', data);
  });

  return {
    socket: socket
  };
})();
