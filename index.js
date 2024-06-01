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

app.post("/pay", async (req,res) => {
    const Msisdn    = req.body.Msisdn;
    const BirthYear = req.body.BirthYear;
    const InvoiceNo = req.body.InvoiceNo;
    const Amount = req.body.Amount  ;
    const Category = 11;
    // const  TransactionId = req.body.TransactionId
    // const  OTP = req.body.OTP
    // const  amount = req.body.amount
    // const  invoice_no = req.body.invoice_no
    const data = await fetch("https://pgw.almadar.ly/api/Validate", {
      method:'POST',
      body: JSON.stringify({Msisdn,BirthYear,InvoiceNo,Amount,Category}),
      headers:{
        "Content-Type": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiU2FkYWRQR1ciLCJjb3Jwb3JhdGVTZXJ2aWNlSWQiOjIzOTksImFwcElkIjoiMTQxZTNiMDY4MDQ5NDk0Y2E5Mjc4YjY2ZmUzMGU2OWYiLCJleHAiOjIwMzAyNjczNjUsImlzcyI6IkNvcmV0ZWMiLCJhdWQiOiJTQURBRFBHVyJ9.PSvwNOLznVSVFg5uJofg812gcj9zfAZnkCMw7gCfgqw",
       
      }
     })
     const result = await data.json()
     res.json(result)
  })
app.listen(8800 , (req,res) => {
    console.log("server is runing")
})