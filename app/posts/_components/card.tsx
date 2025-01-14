import type { Post } from "@prisma/client";

export default function Card({ post }: { post: Post }) {
  return (
    <article className="transition ease-out hover:scale-105 duration-500 bg-zinc-100 border-1 rounded shadow-xl p-2">
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
