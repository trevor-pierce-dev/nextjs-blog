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
            className="border rounded border-solid border-black w-full md:w-1/3"
            key={post.id}
          >
            <h1>{post.title}</h1>
            <h2>by {post.author.name}</h2>
          </article>
        ))}
    </div>
  );
}
