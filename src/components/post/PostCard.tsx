import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { TPostNode } from "@/types/post";

type Props = {
  post: TPostNode;
  categories?: string[];
};

export default function PostCard({ post, categories }: Props) {
  const image = getImage(post.frontmatter.hero_image);
  return (
    <article key={post.id} className="p-3 rounded-lg border hover:shadow">
      <Link
        to={`/${post.frontmatter.path}/${post.frontmatter.slug}`}
        className="w-full flex justify-between"
      >
        <div className="flex flex-col justify-between gap-2">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              {post.frontmatter.title}
            </h2>
            <p className="text-balance">{post.excerpt}</p>
          </div>
          <span className="text-sm font-light">{post.frontmatter.date}</span>
          {categories?.map((c) => (
            <p key={c} className="text-sm text-foreground/50 font-mono">
              {c}
            </p>
          ))}
        </div>
        {image && (
          <GatsbyImage
            image={image}
            alt={post.frontmatter.hero_image_alt}
            className="rounded-xl"
          />
        )}
      </Link>
    </article>
  );
}
