import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const content = await getContent();
    res.status(200).json(content);
  } catch (error) {
    next(error);
  }
});

export default router;
