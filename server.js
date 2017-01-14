'use strict';

if (process.env.NODE_ENV === 'production')
    require('newrelic');
    
const PORT = process.env.PORT || 3333;

import os from 'os';
import express from 'express';
import https from 'https';
import fs from 'fs';
import RoutesConfig from './server/config/routes.conf';
import DBConfig from './server/config/db.conf';
import Routes from './server/routes/index';
const io = require('socket.io')(https);
const path = require('path');

const app = express();

RoutesConfig.init(app);
DBConfig.init();
Routes.init(app, express.Router());
// listen to https instance of app

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const opts = {
    key: fs.readFileSync(__dirname + '/server/cert/server.key'),
    cert: fs.readFileSync(__dirname + '/server/cert/server.crt')
}

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
        consol.log('user disconnected');
    })

    socket.on('add-message', (message) => {
        io.emit('message', {type:'new-message', text: message});    
    });
});

https.createServer(opts, app)
    .listen(PORT, () => {
        console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
        console.log(`enviroment: ${process.env.NODE_ENV}`);
    });