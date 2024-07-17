import express from "express";
import getAbout from "../src/services/about.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const about = await getAbout();
    res.status(200).json(about);
  } catch (error) {
    next(error);
  }
});

export default router;
