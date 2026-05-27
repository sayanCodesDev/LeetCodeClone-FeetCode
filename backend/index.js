require('dotenv').config()

const express=require("express")
const ConnectDB =require("./connectDB")
const userAuth= require("./routes/userAuths")

const PORT=process.env.PORT;
const app= express()
app.use(express.json())

ConnectDB();

app.use("/api/auth",userAuth)

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})