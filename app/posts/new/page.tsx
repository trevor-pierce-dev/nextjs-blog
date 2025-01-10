import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

async function createPost(formData: FormData) {
  "use server";
  const rawFormData = {
    title: formData.get("title"),
    content: formData.get("content"),
  };

  const post = await prisma.post.create({
    data: {
      title: rawFormData.title.toString(),
      content: rawFormData.content.toString(),
      published: true,
      authorId: 1,
    },
  });

  redirect(`/posts/${post.id}`);
}

export default function Page() {
  return (
    <form
      className="bg-zinc-100 border-1 rounded shadow-xl p-3 w-full md:w-1/2 text-lg flex flex-col gap-4"
      action={createPost}
    >
      <h1 className="text-xl">Create a New Post</h1>
      <hr />
      <div>
        <label htmlFor="title" className="block">
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          className="border rounded border-zinc-300 w-full"
        />
      </div>
      <div>
        <label htmlFor="content" className="content">
          Content:
        </label>
        <textarea
          id="content"
          name="content"
          className="border rounded border-zinc-300 w-full"
        />
      </div>
      <div>
        <button
          type="submit"
          className="float-end border text-white border-1 rounded border-zinc-300 p-2 bg-green-700"
        >
          Submit this form
        </button>
      </div>
    </form>
  );
}
