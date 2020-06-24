/*
 * Require
 */
const express = require('express');
const Server = require('http').Server;
const socket = require('socket.io');
// const axios = require('axios')

const users = {};
// evry user loading the site get their own socket

/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server);
const port = 3001;

io.on('connection', socket => {
  // socket.emit('chat-message', 'hello word')   //send a message

  // new users are store in user with their name & send to other client
  socket.on('new-user', name => {
    users[socket.id] = name;
    socket.broadcast.emit('user-connected', name);
  });

  // receive the message and send to other client (and not the sender)
  socket.on('send-chat-message', message => {
    socket.broadcast.emit('chat-message', { message, name: users[socket.id] })
  });

  socket.on('disconnect', () => {
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id];
  });
});

server.listen(port, () => {
  console.log(listening on *:${port});
});
