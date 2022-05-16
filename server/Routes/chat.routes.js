const router = require("express").Router();
const { Server } = require("socket.io");

const io = new Server();

module.exports = router;
