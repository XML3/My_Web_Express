import express from "express";
import contactFormEntry from "../src/services/contactForm.js";

const router = express.Router();

//POST - Create Contact
router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    const newContact = await contactFormEntry(
      firstName,
      lastName,
      email,
      message
    );

    if (!firstName || !lastName || !email || !message) {
      res.status(400).json({
        message: "First Name, Last Name, Email and Message are required fileds",
      });
    } else {
      res.status(201).json(newContact);
    }
  } catch (error) {
    next(error);
  }
});

export default router;
