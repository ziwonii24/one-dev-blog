import * as React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import PostCard from "../../components/post/PostCard";
import { TPostsData } from "@/types/post";

const TITLE = "Wiki";

type Props = {
  data: TPostsData;
};

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      filter: { internal: { contentFilePath: { regex: "/contents/wiki/" } } }
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
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title={TITLE} />;

export default function WikiPage({ data }: Props) {
  return (
    <Layout pageTitle={TITLE}>
      <section className="flex flex-col gap-6">
        {data.allMdx.nodes.map((node) => (
          <PostCard
            key={node.id}
            post={node}
            categories={node.frontmatter.category}
          />
        ))}
      </section>
    </Layout>
  );
}
