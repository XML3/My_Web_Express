import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const skills = await getSkills();
    res.status(200).json(skills);
  } catch (error) {
    next(error);
  }
});

export default router;
