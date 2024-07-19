import express from "express";
import contactFormEntry from "../src/services/contactForm.js";

const router = express.Router();

//POST - Create Contact
router.post("/", async (req, res, next) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
        message:
          "First Name, Last Name, Email, and Message are required fields",
      });
    }

    const newContact = await contactFormEntry(
      firstName,
      lastName,
      email,
      message
    );
    res.status(201).json(newContact);
  } catch (error) {
    if (error.message === "A contact with this email already exists.") {
      res.status(409).json({ message: error.message }); // 409 Conflict
    } else {
      next(error); // Pass other errors to the error handler middleware
    }
  }
});

export default router;
