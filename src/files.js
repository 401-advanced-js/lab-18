'use strict';
const fs = require('fs');

const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);


const io = require('socket.io-client');
const socket = io.connect('http://localhost:3001');

const loadFile = (file) => readFile(file);
const saveFile = (file,buffer) => writeFile(file,buffer);
const convertBuffer = (buffer) => Buffer.from(buffer.toString().trim().toUpperCase());


const alterFile = (file) => {
  loadFile(file)
    .then( buffer => convertBuffer(buffer))
    .then( buffer => saveFile(file,buffer) )
    .then( success => {
      socket.emit('save', file);
      socket.end();
    })
    .catch(error => socket.emit('error', error));
};
module.exports = {loadFile,saveFile,convertBuffer,alterFile};