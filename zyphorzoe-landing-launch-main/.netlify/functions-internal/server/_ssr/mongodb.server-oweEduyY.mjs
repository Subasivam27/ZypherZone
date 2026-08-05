import { t as require_lib } from "../_libs/mongodb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mongodb.server-oweEduyY.js
var import_lib = require_lib();
var cachedDb = null;
async function getMongoDb() {
	if (cachedDb) return cachedDb;
	const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
	const MONGODB_DB = "zypherzone";
	const client = new import_lib.MongoClient(MONGODB_URI);
	await client.connect();
	const db = client.db(MONGODB_DB);
	cachedDb = db;
	return db;
}
async function saveEnquiryToServer(data) {
	return {
		success: true,
		id: (await (await getMongoDb()).collection("enquiries").insertOne({
			...data,
			createdAt: /* @__PURE__ */ new Date(),
			status: "pending"
		})).insertedId.toString()
	};
}
async function saveHelpRequestToServer(data) {
	return {
		success: true,
		id: (await (await getMongoDb()).collection("help_requests").insertOne({
			...data,
			createdAt: /* @__PURE__ */ new Date(),
			status: "open"
		})).insertedId.toString()
	};
}
//#endregion
export { saveEnquiryToServer, saveHelpRequestToServer };
