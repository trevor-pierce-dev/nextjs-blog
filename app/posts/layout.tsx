import React from "react";

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col items-center p-5">{children}</div>;
}
