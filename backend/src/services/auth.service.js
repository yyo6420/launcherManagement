import { db, usersCollection } from "../mongodb/mongodb.js";

export const createUser = async (username, password, email, userType) => {
    if (!usersCollection) {
        usersCollection = db?.collection("users");
    }

    const result = await usersCollection.insertOne({
        username,
        password,
        email,
        userType,
        lastLogin: null
    })
    return { id: result.insertedId, username, userType }
}