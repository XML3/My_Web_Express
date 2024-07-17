import prisma from "../../../lib/prismaClient.js";

const getContentById = async (id) => {
  const content = await prisma.content.findUnique({
    where: {
      id,
    },
  });

  return content;
};

export default getContentById;
