const socket = require('socket.io-client')('http://localhost:3005');

export default (function() {

  socket.on('connect', () => {
    console.log('connected');
  });

  return {
    socket
  };
})();
