import prisma from "@/lib/prisma";

export default async function Page() {
  const posts = await prisma.post.findMany({});

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
