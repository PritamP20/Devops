import express from "express"
import { PrismaClient } from "@prisma/client"

const app = express()
const client = new PrismaClient()

app.get("/", async(req, res)=>{
    const data= await client.user.findMany();
    res.json({
        message:data
    })
})


app.post("/",async (req,res)=>{
    await client.user.create({
        data:{
            username: Math.random.toString(),
            password: Math.random().toString()
        }
    })
    res.json({
        message:"user created"
    })
})

app.listen(3000,()=>{
    console.log("Listening in port 3000")
})