import { MongoClient, Db } from "mongodb";

let cachedDb: Db | null = null;

export async function getMongoDb() {
  if (cachedDb) {
    return cachedDb;
  }

  const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
  const MONGODB_DB = "zypherzone";

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db(MONGODB_DB);

  cachedDb = db;
  return db;
}

export async function saveEnquiryToServer(data: any) {
  const db = await getMongoDb();
  const collection = db.collection("enquiries");
  
  const result = await collection.insertOne({
    ...data,
    createdAt: new Date(),
    status: "pending",
  });
  
  return { success: true, id: result.insertedId.toString() };
}

export async function saveHelpRequestToServer(data: any) {
  const db = await getMongoDb();
  const collection = db.collection("help_requests");
  
  const result = await collection.insertOne({
    ...data,
    createdAt: new Date(),
    status: "open",
  });
  
  return { success: true, id: result.insertedId.toString() };
}
