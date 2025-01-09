import prisma from "@/lib/prisma";

export default async function Page() {
  const posts = await prisma.post.findMany({
    include: {
      author: true,
    },
  });

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <h1>{post.title}</h1>
          <h2>by {post.author.name}</h2>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  );
}
