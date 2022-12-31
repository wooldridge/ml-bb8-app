const config = require('../config');
const express = require('express');
const morgan = require("morgan");
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

app.use(cors());

// Configuration
const PORT = config.server.port;
const HOST = config.host;
const API_SERVICE_URL = "http://" + config.host + ":" + config.rest["rest-api"].port;

// Logging
app.use(morgan('dev'));

// Info GET endpoint
app.get('/info', (req, res, next) => {
    res.send('This service proxies to the MarkLogic REST API.');
});

// Proxy endpoints
app.use('/v1/documents', createProxyMiddleware({
    target: API_SERVICE_URL,
    changeOrigin: true,
    auth: config.user["user-name"] + ":" + config.user.password
}));

// Start Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
});