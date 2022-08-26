const WebSocket = require('ws');
const WebSocketServer = new WebSocket.Server({ port: 3001  });


WebSocketServer.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('message', (message) => {
    console.log(message);
  });
  socket.send('Hello from server');
});