import * as React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Article = ({ node, path }: { node: any; path: string }) => {
  const image = getImage(node.frontmatter.hero_image);
  return (
    <article key={node.id} className="p-3 rounded-lg border hover:shadow">
      <Link
        to={`/${path}/${node.frontmatter.slug}`}
        className="w-full flex justify-between"
      >
        <div className="flex flex-col justify-between gap-2">
          <div>
            <h2 className="text-xl font-semibold mb-2">
              {node.frontmatter.title}
            </h2>
            <p className="text-balance">{node.excerpt}</p>
          </div>
          <span className="text-sm font-light">{node.frontmatter.date}</span>
        </div>
        {image && (
          <GatsbyImage
            image={image}
            alt={node.frontmatter.hero_image_alt}
            className="rounded-xl"
          />
        )}
      </Link>
    </article>
  );
};

export default Article;
