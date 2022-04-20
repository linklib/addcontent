import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const block1 = await prisma.block.create({
    data: {
      position: 1,
      contents: {
        create: {
          title: "Тестовый блок номер 1",
          imgpath: "path-to-file",
          text: "Тестовый текст для блока номер 1",
        },
      },
    },
  });

  console.log({ block1 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
