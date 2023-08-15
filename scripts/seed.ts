const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main() {
  try {
    await db.category.createMany({
      data: [
        { name: "Famous people" },
        { name: "Movies & TV" },
        { name: "Musicians" },
        { name: "Games" },
        { name: "Animals" },
        { name: "Cricketers" },
        { name: "Scientists" },
      ],
    });
  } catch (error) {
    console.error("Error seeding categories: ", error);
  } finally {
    await db.$disconnect();
  }
}

main();
