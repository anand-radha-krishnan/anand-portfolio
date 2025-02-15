"use server";
import mongoose from "mongoose";

const globalAny: any = global;

let dbUri = process.env.MONGODB_DATABASE;
if (dbUri && process.env.MONGODB_USERNAME && process.env.MONGODB_PASSWORD) {
  dbUri = dbUri
    .replace("<db_username>", process.env.MONGODB_USERNAME)
    .replace("<db_password>", process.env.MONGODB_PASSWORD);
} else {
  throw new Error("Please define the MONGODB_DATABASE environment variable");
}

let cached: any = globalAny.mongoose;

if (!cached) {
  cached = globalAny.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise && dbUri) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(dbUri, opts).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default dbConnect;
