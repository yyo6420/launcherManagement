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

export const getUsers = async () => {
    if (!usersCollection) {
        usersCollection = db?.collection("users");
    }

    const result = usersCollection.find().toArray();
    if (!result) throw new Error("We can't find the users :(");

    return result;
}

export const getUser = async (username) => {
    if (!usersCollection) {
        usersCollection = db?.collection("users");
    }

    const result = usersCollection.findOne({ username: username });

    return result;
}