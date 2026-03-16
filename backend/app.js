import express from "express";
import morgan from "morgan";
import cors from "cors";
import { makeMongoConnection } from "./src/mongodb/mongodb.js";
import launchersRoutes from "./src/launchers.routes.js";

const app = express();
const PORT = process.env.PORT;

app.use(morgan("tiny"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(cors());

await makeMongoConnection();

app.use("/api/launchers", launchersRoutes);

app.get("/", async (request, response) => {
    response.json({
        message: "Welcome to Launchers Management API",
        version: "1.0.0",
    });
});

app.listen(PORT, async () => {
    console.log(`listening on port ${PORT}...`);
})