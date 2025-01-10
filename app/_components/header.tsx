import Link from "next/link";

export default function Header() {
  return (
    <header className="inline-block w-full md:w-1/2 pb-3 px-1">
      <div className="float-start font-bold text-xl p-2">
        <Link href="/">Just a Blog</Link>
      </div>
      <div className="float-end border bg-zinc-100 border-1 rounded border-zinc-300 p-2">
        <Link href="/posts/new">Create New Post +</Link>
      </div>
    </header>
  );
}
