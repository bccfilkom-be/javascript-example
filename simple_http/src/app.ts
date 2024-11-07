// @deno-types="@types/express"
import express, { type Request, type Response } from "express";
import { pino } from "pino";
import config from "./config/index.ts";

const r = express();
const logger = pino();

r.get("/", (_: Request, res: Response) => {
	res.status(200).json({ result: 2 });
});

r.listen(config.port, () => {
	logger.info(`Server listening on port ${config.port}`);
});
