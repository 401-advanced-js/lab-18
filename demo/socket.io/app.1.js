'use strict';

const faker = require('faker')
const io = require('socket.io-client');
const socket = io.connect('http://localhost:3333');

socket.emit('speak', faker.hacker.phrase());