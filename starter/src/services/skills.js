import prisma from "../../lib/prismaClient.js";

const getSkills = async () => {
  const skills = await prisma.skills.findMany();

  return skills;
};

export default getSkills;
