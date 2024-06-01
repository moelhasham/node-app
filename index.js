const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json());

app.get("/" , async (req,res) => {
    await res.json("heelo")
})

app.get("/user" , async (req,res) => {
    await res.json("heelo user")
})

app.get("/api" , async (req,res) => {
    await res.json("this is first api")
})
app.listen(8800 , (req,res) => {
    console.log("server is runing")
})