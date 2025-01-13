import prisma from "@/lib/prisma";
import Link from "next/link";

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
      className="bg-zinc-100 border-1 rounded shadow-xl p-2 w-full md:w-1/2"
      key={post.id}
    >
      <div className="inline-block w-full">
        {" "}
        <h2 className="text-xl float-start">{post.title}</h2>{" "}
        <div className="float-end border text-white border-1 rounded border-zinc-300 p-2 bg-green-700">
          <Link href={`/posts/${post.id}/edit`}>Edit Post</Link>
        </div>
      </div>
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
