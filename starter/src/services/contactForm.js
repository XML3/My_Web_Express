import prisma from "../../lib/prismaClient.js";

const contactFormEntry = async (firstName, lastName, email, message) => {
  try {
    const newcontact = await prisma.contact.create({
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
      },
    });
    await newcontact.save();

    return contact;
  } finally {
    await prisma.$disconnect();
  }
};

export default contactFormEntry;
