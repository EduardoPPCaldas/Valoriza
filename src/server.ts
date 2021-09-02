import express from "express"

const app = express()

app.get("/test", (req, res)=>{
  return res.send("Hello world")
})

app.post("/test-post" , (req, res)=>{
  return res.send("Olá Nlw método post")
})

app.listen(3000, ()=>{
  console.log("Server is running")
})