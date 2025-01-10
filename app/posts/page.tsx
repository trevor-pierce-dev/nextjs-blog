import prisma from "@/lib/prisma";

export default async function Page() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return (
    <div className="flex flex-col items-center p-5">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full md:w-1/3">
        {posts
          .filter((post) => post.published)
          .map((post) => (
            <article
              className="bg-zinc-50 border-2 rounded border-solid border-zinc-200 p-2"
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
            </article>
          ))}
      </div>
    </div>
  );
}
