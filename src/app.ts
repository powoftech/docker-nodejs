import express from "express";
import morgan from "morgan";
import { errorHandler } from "./handlers/errorHandler.js";
import { notFoundHandler } from "./handlers/notFoundHandler.js";

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Docker is easy 🐋🐳" });
});

app.use(notFoundHandler, errorHandler);

export default app;
