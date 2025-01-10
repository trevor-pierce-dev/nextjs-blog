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
  return (
    <article
      className="bg-zinc-100 border-1 rounded shadow-xl p-2 w-full md:w-1/3"
      key={post.id}
    >
      <h2 className="text-xl">{post.title}</h2>
      <h3 className="text-xs">
        {post.createdAt.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h3>
      <p>{post.content}</p>
    </article>
  );
}
