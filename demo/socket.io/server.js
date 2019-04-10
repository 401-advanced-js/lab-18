'use strict';

const io = require('socket.io')(3333);

io.on('connection', (socket) => {
  console.log('CONNECTED, ', socket.id)

  socket.on('speak', (payload) => {
    io.emit('message', payload);  //io.broadcast.emit sends to everyone
  })


});

const school = io.of('/school');
school.on('connection', (socket) => {
  console.log('SCHOOL', socket.id);
  
  socket.on('speak', (payload) => {
    io.emit('message', payload);  //io.broadcast.emit sends to everyone
  });
  
  socket.on('challenge', (payload) => {
    school.to('codefellows').emit('challenge', payload);
  });
    
  socket.on('join', (room) => {
    console.log('Joined', room);
    socket.join(room);
  });
})
