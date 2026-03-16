import { MongoClient } from "mongodb";

let mongoconnection;
const MONGO_URI = "mongodb://yosef_ohayon:Bk7g4qudEw6ClSFV@ac-jduuodi-shard-00-00.tqv4vzx.mongodb.net:27017,ac-jduuodi-shard-00-01.tqv4vzx.mongodb.net:27017,ac-jduuodi-shard-00-02.tqv4vzx.mongodb.net:27017/agentsAndReports?ssl=true&replicaSet=atlas-tb5aka-shard-0&authSource=admin&retryWrites=true&w=majority"

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
    if(!mongoconnection) await makeMongoConnection();
    if(!mongoconnection) throw new Error("Mongo connection failed :(");
    return mongoconnection?.db("launchersDB");
}

export const closeConnection = async () => {
    if(!mongoconnection) return;
    await mongoconnection.close();
    mongoconnection = null;
    console.log("mongo connection closed safely, bye bye ;)")
}

export const db = await getdb("launchersDB");
export const launchersCollection = db?.collection("launchers");