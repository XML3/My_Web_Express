import express from "express";

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
