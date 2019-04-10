'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3333/school');


socket.on('message', payload => {
  console.log('School message was', payload);
}) 