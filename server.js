/* eslint-disable prefer-destructuring */
/*
 * Require
 */
const express = require('express');
const bodyParser = require('body-parser');
const Server = require('http').Server;
const socket = require('socket.io');

/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server);
const port = 3001;

/*
 * Express
 */
app.use(bodyParser.json());
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

/*
 * Socket.io
 */
let id = 0;
io.on('connection', (ws) => {
  // console.log('>> socket.io - connected');
  ws.on('send_message', (message) => {
    // eslint-disable-next-line no-plusplus
    message.id = ++id;
    io.emit('send_message', message);
  });
});

/*
 * Server
 */
server.listen(port, () => {
  // console.log(`listening on *:${port}`);
});
