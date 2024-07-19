import prisma from "../../lib/prismaClient.js";

const contactFormEntry = async (firstName, lastName, email, message) => {
  try {
    //Checks if emails address already exists in the DB
    const existingContact = await prisma.contact.findUnique({
      where: { email: email },
    });

    if (existingContact) {
      throw new Error("A contact with this email already exists.");
    }

    //Create a new contact in the DB
    const newContact = await prisma.contact.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
      },
    });

    return newContact;
  } catch (error) {
    console.error.apply("Error processing contact form entry: ", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};

export default contactFormEntry;
