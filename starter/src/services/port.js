import prisma from "../../lib/prismaClient.js";

const getPort = async () => {
  const content = await prisma.port.findMany();

  return content;
};

export default getPort;
