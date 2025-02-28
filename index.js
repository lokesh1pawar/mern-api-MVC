const express = require('express');
const {connectMongoDb} = require('./connection');


const userRouter = require('./routes/user');
const {logResRes} = require("./middlewares");

const app = express();
const PORT = 8025;

// Connection 
connectMongoDb('mongodb://127.0.0.1:27017/YT-app').then(()=>
  console.log("MonfoDB connected!"));

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));
app.use(logResRes("log.txt"));

// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}`);
});
