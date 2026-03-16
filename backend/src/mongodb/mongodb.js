import { MongoClient } from "mongodb";

let mongoconnection;
const MONGO_URI = process.env.MONGO_URI;

export const makeMongoConnection = async () => {
    if (mongoconnection) return mongoconnection;
    try {
        if (!MONGO_URI) throw new Error("MONGO_URI is missing :(");
        mongoconnection = new MongoClient(MONGO_URI)
        await mongoconnection.connect();
        console.log("Mongo connection established successfully :)");
        return mongoconnection;
    } catch (error) {
        mongoconnection = null;
        console.error(error.message);
        throw error;
    }
};

export const getdb = async () => {
    if (!mongoconnection) await makeMongoConnection();
    if (!mongoconnection) throw new Error("Mongo connection failed :(");
    return mongoconnection?.db(process.env.DB_NAME);
}

export const closeConnection = async () => {
    if (!mongoconnection) return;
    await mongoconnection.close();
    mongoconnection = null;
    console.log("mongo connection closed safely, bye bye ;)")
}

export const db = await getdb(process.env.DB_NAME);
export const launchersCollection = db?.collection("launchers");