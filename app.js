const http = require('http');
const config = require('./config');
const logger = require('./logger');

http.createServer((req, res) => {
    logger.info('New incoming request');
    res.writeHeader(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ message: 'Hello world!'}));
}).listen(config.APP_PORT | 3000, () => logger.info(`Server is listening on port ${ config.APP_PORT }. Env is ${ config.ENV }`))