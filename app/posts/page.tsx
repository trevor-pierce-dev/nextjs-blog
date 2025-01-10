import prisma from "@/lib/prisma";

export default async function Page() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return (
    <div className="flex flex-col items-center gap-5 p-5">
      {posts
        .filter((post) => post.published)
        .map((post) => (
          <article
            className="bg-zinc-50 border-2 rounded border-solid border-zinc-200 w-full p-2 md:w-1/3"
            key={post.id}
          >
            <h2 className="text-lg">{post.title}</h2>
            <h3 className="text-xs">by {post.author.name}</h3>
            <hr className="border-zinc-400" />
          </article>
        ))}
    </div>
  );
}
