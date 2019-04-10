'use strict';

const io = require('socket.io')(3001);

io.on('connection', (socket) => {
  socket.on('save', (payload) => {
    io.emit('save', payload);
  })
  socket.on('error', (payload) => {
    io.emit('error', payload);
  })
})