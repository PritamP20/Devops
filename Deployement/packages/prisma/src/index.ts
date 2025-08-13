import { PrismaClient } from "@prisma/client";

console.log("Initializing Prisma Client...");
export const client = new PrismaClient();
