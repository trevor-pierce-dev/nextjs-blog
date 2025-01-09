import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function clearSeedData() {
  await prisma.post.deleteMany({});
  await prisma.user.deleteMany({});
}

async function createSeedData() {
  await prisma.user.create({
    data: {
      name: "Trevor",
      email: "trevor@test.edu",
      posts: {
        create: {
          title: "Hello World",
          content: "Just a test post",
          published: true,
        },
      },
    },
  });
}

async function main() {
  await clearSeedData();
  await createSeedData();

  console.info("Seed data populated");
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
