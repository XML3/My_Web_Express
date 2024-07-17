import express from "express";
import getContent from "../src/services/content/content.js";
import getContentById from "../src/services/content/getContentById.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const content = await getContent();
    res.status(200).json(content);
  } catch (error) {
    next(error);
  }
});

//Get By Id
router.get("/:id", async (res, req, next) => {
  try {
    const { id } = reg.params;
    const content = await getContentById(id);

    if (!content) {
      res.status(404).send(`Content with id ${id} was not found`);
    } else {
      res.status(200).json(content);
    }
  } catch (error) {
    next(error);
  }
});

export default router;
