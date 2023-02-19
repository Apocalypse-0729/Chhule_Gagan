const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");


const connectDB = require("./db/conn")
const userRouters = require("./Routes/userroutes")
    //const ChatRoutes = require("./Routes/chatroute")
    //const MessageRoutes = require("./Routes/messageroute")

const app = express();
dotenv.config();

connectDB();

app.use(express.json());

app.use(
    cors({
        origin: true,
        optionsSuccessStatus: 200,
        credentials: true,
    })
);


app.get('/', (req, res) => {
    res.send("hello from backend").status(200);

})

app.use('/api/user', userRouters)
    //app.use('/api/chat', ChatRoutes)
    //app.use('/api / message ', MessageRoutes)

const port = process.env.PORT
const server = app.listen(port, console.log(`server is running at port no ${port}`));