const express = require('express');
const port = 4555

module.exports = { app: express(), express: express, port, router: express.Router() };