import { TPostNode } from "@/types/post";
import * as React from "react";
import PostCard from "./PostCard";

type Props = {
  posts: TPostNode[];
};

export default function PostList({ posts }: Props) {
  return (
    <section className="flex flex-col gap-6">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
