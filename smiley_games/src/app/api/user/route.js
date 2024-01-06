import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri =
  "mongodb+srv://admin:admin123@cluster0.glemluw.mongodb.net/?retryWrites=true&w=majority";
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

const mongo = new MongoClient(uri, options);

export async function POST(req) {
  try {
    let bodyObject = await req.json();
    const client = await mongo.connect();
    const db = client.db("smiley-games");
    await db.collection("user").insertOne(bodyObject);
    await mongo.close();
    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ message: "failed" });
  }
}
