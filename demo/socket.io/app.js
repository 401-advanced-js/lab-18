'use strict';

const net = require('net');
const client = new net.Socket();
client.connect(3333, 'localhost', () => {});

const headers = `
Content-Type:text/html
Accept:JSON
Authorization:Basic #adkafjfdskl
Method:Get
Path:/api/v1/books
Keep-Alive:true
Web-Socket-Version:16.x
`
client.write(headers);

client.on('data', (html) => {
  console.log(html);
  client.end();
})