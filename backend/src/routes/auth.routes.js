import express from "express";
import { asyncHandler } from "../utills/asyncHandler.js";
import { authorization } from "../middlewares/auth.middleware.js";
import { createUser } from "../services/auth.service.js";

const router = express.Router();

router.post("/register/create", asyncHandler(async (request, response) => {
    const { username, password, email, userType } = request.body;
    if (!username || !password || !email || !userType) throw new Error("You did not type all the necessary details");

    const newUser = await createUser(username, password, email, userType);

    response.status(201).send({ message: "congratulations, the user created successfully :)", newUser });
}))

export default router;