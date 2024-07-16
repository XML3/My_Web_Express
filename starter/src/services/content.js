import prisma from "../../lib/prismaClient.js";

const getContent = async () => {
  const content = await prisma.content.findMany();

  return content;
};

export default getContent;
