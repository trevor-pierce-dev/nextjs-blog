import prisma from "@/lib/prisma";
import Link from "next/link";
import Card from "@/app/posts/_components/card";

export default async function Page() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full md:w-1/2">
      {posts
        .filter((post) => post.published)
        .map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <Card post={post} />
          </Link>
        ))}
    </div>
  );
}
