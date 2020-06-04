const express = require("express");
const server = express()

//configurar pasta publica
server.use(express.static("public"))

//utilizando template engines
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get("/", (req, res) => {
    res.render("index.html")
})

server.get("/create-point", (req, res) => {
    res.render("create-point.html")
})

server.get("/search", (req, res) => {
    res.render("search-results.html")
})

server.listen(3000);