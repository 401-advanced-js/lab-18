'use strict';

const io = require('socket.io-client');

const socket = io.connect('http://localhost:3001');

socket.on('save', payload => {
  console.log('SHIZ GOT SAVED BRUH TO ', payload);
})
socket.on('error', payload => {
  console.log('You messed up buddy', payload);
})