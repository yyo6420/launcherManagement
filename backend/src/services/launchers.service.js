import { db, launchersCollection } from "../mongodb/mongodb.js"

export const getAllLauncers = async () => {
    if (!launchersCollection) {
        launchersCollection = db?.collection("launchers");
    }

    const result = await launchersCollection.find().toArray();
    if (!result) throw new Error("The results are not found :(");

    return result;
}

export const createlauncherReport = async (name, rocketType, latitude, longitude, city) => {
    if (!launchersCollection) {
        launchersCollection = db?.collection("launchers");
    }

    const result = launchersCollection.insertOne({
        name,
        rocketType,
        latitude,
        longitude,
        city
    });
    return { id: result.insertedId, name }
}