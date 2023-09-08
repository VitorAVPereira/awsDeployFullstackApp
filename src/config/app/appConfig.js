const express = require('express');
const port = process.env.PORT

module.exports = { app: express(), express: express, port, router: express.Router() };