import { PrismaClient } from "@prisma/client";
import contentData from "../src/data/content.json" assert { type: "json" };
import aboutData from "../src/data/about.json" assert { type: "json" };
import portData from "../src/data/port.json" assert { type: "json" };
import skillData from "../src/data/skills.json" assert { type: "json" };

const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });

async function main() {
  const { content } = contentData;
  const { about } = aboutData;
  const { port } = portData;
  const { skills } = skillData;

  for (const contents of content) {
    await prisma.content.upsert({
      where: { id: contents.id },
      update: {},
      create: contents,
    });
  }

  for (const abouts of about) {
    await prisma.about.upsert({
      where: { id: abouts.id },
      update: {},
      create: abouts,
    });
  }

  for (const ports of port) {
    await prisma.port.upsert({
      where: { id: ports.id },
      update: {
        title: ports.title,
        text: ports.text,
        image: ports.image,
        link: ports.link,
      },
      create: ports,
    });
  }

  for (const skill of skills) {
    await prisma.skills.upsert({
      where: { id: skill.id },
      update: {},
      create: skill,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
