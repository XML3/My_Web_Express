import express from "express";
import getPort from "../src/services/port.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const port = await getPort();
    res.status(200).json(port);
  } catch (error) {
    next(error);
  }
});

export default router;
