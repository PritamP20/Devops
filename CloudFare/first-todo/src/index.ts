import { Hono } from "hono";
import { cors } from "hono/cors";
import { PrismaClient } from "./generated/prisma/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const app = new Hono();
app.use(cors());

app.get("/", async(c)=>{
  return c.json({ working: "It is working" }, 200);
})

app.post("/signup", async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl:
      "prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMDFKWTk4ODEySEMwV1o4UjZNRE1HR0U4Q0ciLCJ0ZW5hbnRfaWQiOiJkYjNmM2I1YzQ5ZTBmZTgwM2M2OTM5ZmEzZThlMGM2OTBiMzYwN2U0ZTY0NzJjNDllMmZhYzVlNjg0MDAzNTM4IiwiaW50ZXJuYWxfc2VjcmV0IjoiNDUzMWNlZjgtMDVmYS00ODlhLWExMGUtNTllNmVhOWY1YmM5In0.lv8DxW4g0-xdHZ2ssXd3yJQCaDbOwHHEseIec1QM1U8"
  }).$extends(withAccelerate());

  let body: { name?: string; email?: string; password?: string };
  try {
    body = await c.req.json();
  } catch {
    return c.json({ error: "Invalid or missing JSON body" }, 400);
  }

  const { name, email, password } = body;
  if (!name || !email || !password) {
    return c.json({ error: "All fields (name, email, password) are required" }, 400);
  }

  try {
    const user = await prisma.user.create({
      data: { name, email, password },
    });

    return c.json({ message: "User created successfully", id: user.id }, 201);
  } catch (err) {
    console.error(err);
    return c.json({ error: "Failed to create user" }, 500);
  }
});

export default app;