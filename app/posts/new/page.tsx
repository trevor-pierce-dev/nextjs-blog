import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import Form from "@/app/posts/_components/form";

function convertCheckboxToBool(value: FormDataEntryValue | null): boolean {
  return value != null && value.toString() == "on";
}

async function createPost(formData: FormData) {
  "use server";
  const rawFormData = {
    title: formData.get("title"),
    content: formData.get("content"),
    published: convertCheckboxToBool(formData.get("published")),
  };

  const post = await prisma.post.create({
    data: {
      title: rawFormData.title.toString(),
      content: rawFormData.content.toString(),
      published: rawFormData.published,
      authorId: 1,
    },
  });

  redirect(`/posts/${post.id}`);
}

export default function Page() {
  return <Form title="Create New Post" updatePost={createPost} />;
}
