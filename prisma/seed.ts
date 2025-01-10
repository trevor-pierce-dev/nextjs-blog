import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const trevor = await prisma.user.upsert({
    where: { email: "trevor@test.io" },
    update: {},
    create: {
      email: "trevor@test.io",
      name: "Trevor",
      posts: {
        create: [
          {
            title: "Hello World",
            content: "Just a test post.",
            published: true,
          },
          {
            title: "Goodbye World",
            content: "What if I typed something else instead of hello world.",
            published: true,
          },
          {
            title: "Nonsense",
            content: "I can type whatever I want here because I feel like it.",
            published: true,
          },
          {
            title: "Batman Spotted",
            content: "Why is Batman covered in spots? Weird.",
            published: true,
          },
        ],
      },
    },
  });
  console.log({ trevor });
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
