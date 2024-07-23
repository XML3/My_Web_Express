import prisma from "../../lib/prismaClient.js";

const getPort = async () => {
  const content = await prisma.port.findMany();
  console.log(content);
  return content;
};

export default getPort;
