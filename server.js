const http = require('http');
const express = require('express');
const appMiddleware = require('./src/services/controllers/middlewares/app-middlewares');
const appRoutes = require('./src/services/controllers/middlewares/routes/index');
const logEvent = require('./src/services/events/myEmitter');
const loggingListener = require('./src/services/events/loggingListener');

loggingListener();
const app = express();
app.use(appMiddleware);
app.use(appRoutes);
const server = http.createServer(app);
server.on('error', function (e) {
    logEvent.emit('APP-ERROR', {
        logTittle: 'APP-FAILED',
        logMessage: e
    });
});
module.exports = server;