import { PrismaClient } from "@prisma/client";

let db;

// If the global variable is available, use it; otherwise, create it
if (typeof global.__db__ === "undefined") {
  global.__db__ = new PrismaClient();
}

db = global.__db__;
db.$connect();

export { db };

