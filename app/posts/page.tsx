import prisma from "@/lib/prisma";
import Card from "@/app/posts/_components/card";

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
            <Card post={post} />
          ))}
      </div>
    </div>
  );
}
