import express from "express";
import { asyncHandler } from "../utills/asyncHandler.js";
import { authorization } from "../middlewares/auth.middleware.js";
import { createUser, getUser, getUsers } from "../services/auth.service.js";
import { createToken } from "../services/jwt.service.js";

const router = express.Router();

router.post("/register/create", authorization(["systemAdministrator"]), asyncHandler(async (request, response) => {
    const { username, password, email, userType } = request.body;
    if (!username || !password || !email || !userType) throw new Error("You did not type all the necessary details");

    const newUser = await createUser(username, password, email, userType);

    response.status(201).send({ message: "congratulations, the user created successfully :)", newUser });
}))

router.post("/login", authorization(["intelligenceCorps", "airForce", "systemAdministrator"]), asyncHandler(async (request, response) => {
    const { username, password } = request.body;
    if (!username || !password) {
        response.status(400).send({ message: "You must type a username and password" })
    }

    const user = getUser(username);
    if (!user) {
        response.status(401).send({ message: "Sorry, your username is not exists, try another one" })
    }

    const isVerified = password === user.password;

    if (!isVerified) {
        response.status(401).send({ message: "Sorry, your password is incorect, try again" })
    }

    const token = createToken({ id: user._id, userType: user.userType });

    response.send({ token, user });
}))

router.get("/getUsers", authorization(["systemAdministrator"]), asyncHandler(async (request, response) => {
    const users = await getUsers();

    response.send(users);
}))

router.get("/getUser", authorization(["intelligenceCorps", "airForce", "systemAdministrator"]), asyncHandler(async (request, response) => {
    const user = await getUser(request.username);
    response.send(user)
}))

export default router;