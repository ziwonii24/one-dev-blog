import React from "react";
import { graphql, PageProps } from "gatsby";
import Layout from "@/components/layout";
import PostCard from "@/components/post/PostCard";
import { TPostsData } from "@/types/post";

type CategoryPageContext = {
  category: string;
};

type CategoryPageProps = PageProps<TPostsData, CategoryPageContext>;

export const query = graphql`
  query ($category: String!) {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          slug
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 140)
            }
          }
          hero_image_alt
          category
          path
        }
        id
      }
    }
  }
`;

export default function CategoryTemplate({
  data,
  pageContext,
}: CategoryPageProps) {
  const { category } = pageContext;
  return (
    <Layout pageTitle={`Category: ${category}`}>
      <section className="flex flex-col gap-2">
        {data.allMdx.nodes.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            categories={post.frontmatter.category}
          />
        ))}
      </section>
    </Layout>
  );
}
