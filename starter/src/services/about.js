import prisma from "../../lib/prismaClient.js";

const getAbout = async () => {
  const about = await prisma.about.findMany();

  return about;
};

export default getAbout;
