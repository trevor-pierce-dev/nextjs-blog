"use client";

import type { Post } from "@prisma/client";
import { useState } from "react";

export default function Form({
  post,
  updatePost,
}: {
  post: Post;
  updatePost: (formData: FormData) => void;
}) {
  const [editedPost, setEditedPost] = useState(post);

  return (
    <form
      className="bg-zinc-100 border-1 rounded shadow-xl p-3 w-full md:w-1/2 text-lg flex flex-col gap-4"
      action={updatePost}
    >
      <h1 className="text-xl">Update Post</h1>
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
          value={editedPost.title}
          onChange={(e) =>
            setEditedPost({ ...editedPost, title: e.target.value })
          }
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
          value={editedPost.content}
          onChange={(e) =>
            setEditedPost({ ...editedPost, content: e.target.value })
          }
        />
      </div>
      <div>
        <input
          type="checkbox"
          id="published"
          name="published"
          checked={editedPost.published}
          onChange={(e) =>
            setEditedPost({ ...editedPost, published: !editedPost.published })
          }
        />
        <label htmlFor="published">Publish?</label>
      </div>
      <input type="hidden" id="id" name="id" value={editedPost.id} />
      <div>
        <button
          type="submit"
          className="float-end border text-white border-1 rounded border-zinc-300 p-2 bg-green-700"
        >
          Submit Changes
        </button>
      </div>
    </form>
  );
}
