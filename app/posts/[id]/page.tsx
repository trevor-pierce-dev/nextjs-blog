import prisma from "@/lib/prisma";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const post = await prisma.post.findUnique({
    where: {
      id: Number(id),
    },
  });
  return <div>My Post: {post.title}</div>;
}
