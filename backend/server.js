const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const app = require("./app");

const http = require("http");
const socketIo = require("socket.io");

const server = http.createServer(app);

const io = require("socket.io")(server, { origins: "*:*" });

require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully !");
});

let interval;

io.on("connection", (socket) => {
  console.log("New client connected");
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});

const getApiAndEmit = (socket) => {
  const response = new Date();
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

server.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});
