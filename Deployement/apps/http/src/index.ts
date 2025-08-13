import * as express from "express"
import {client} from "@repo/prisma/client"


const app = express.default()
app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Hi there")
})

app.get("/sigup", async (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    console.log(req.body)
    
    const user = await client.user.create({
        data:{
            username:"Pritam",
            password:"working"
        }
    })

    res.json({message: "signedup Succefullly", id:user.id})
})

app.listen(3001)