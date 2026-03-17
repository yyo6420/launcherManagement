import express from "express";
import { createlauncherReport, getAllLauncers } from "../services/launchers.service.js";
import { asyncHandler } from "../utills/asyncHandler.js";

const router = express.Router();

router.post("/", asyncHandler(async (request, response) => {
    const name = request.body.name;
    const rocketType = request.body.rocketType;
    const latitude = request.body.latitude;
    const longitude = request.body.longitude;
    const city = request.body.city;
    const laucher = await createlauncherReport(name, rocketType, latitude, longitude, city);
    if (!laucher) throw new Error("launcher report creation failed :(");
    response.status(201).send({ message: "launcher report created successfully :)", laucher });
}))


router.get("/", asyncHandler(async (request, response) => {
    const lauchers = await getAllLauncers();
    response.send(lauchers);
}));


export default router;