import { Post } from "@prisma/client";

export default function Card({ post }: { post: Post }) {
  return (
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
  );
}
