const express = require("express");
const ejs = require("ejs");
const router = require("./routes/route.js");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
// view engine setup

server.use(express.static("public"));
server.set("view engine", "ejs");


server.use("/", router);
server.use("/register",router);
server.use("/login",router);
server.use("/contact",router);
server.use("/dash",router);

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});