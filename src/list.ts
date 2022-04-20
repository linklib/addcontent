import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
  const allBlocks = await prisma.block.findMany({
    include: { contents: true },
  });
  // use `console.dir` to print nested objects
  console.dir(allBlocks, { depth: null });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
