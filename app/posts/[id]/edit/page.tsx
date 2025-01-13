import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import Form from "@/app/posts/_components/form";

function convertCheckboxToBool(value: FormDataEntryValue | null): boolean {
  return value != null && value.toString() == "on";
}

async function updatePost(formData: FormData) {
  "use server";
  const rawFormData = {
    id: formData.get("id"),
    title: formData.get("title"),
    content: formData.get("content"),
    published: convertCheckboxToBool(formData.get("published")),
  };

  const post = await prisma.post.update({
    where: {
      id: Number(rawFormData.id),
    },
    data: {
      title: rawFormData.title.toString(),
      content: rawFormData.content.toString(),
      published: rawFormData.published,
      authorId: 1,
    },
  });

  redirect(`/posts/${post.id}`);
}

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
    <Form
      title={"Update Post"}
      post={{
        title: post.title,
        content: post.content,
        id: post.id,
        published: post.published,
      }}
      updatePost={updatePost}
    />
  );
}
