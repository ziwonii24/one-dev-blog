import * as React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/layout";
import { graphql } from "gatsby";
import Article from "../../components/Article";

const TITLE = "Wiki";

const WikiPage = ({ data }: { data: any }) => {
  return (
    <Layout pageTitle={TITLE}>
      <section className="flex flex-col gap-6">
        {data.allMdx.nodes.map((node: any) => (
          <Article key={node.id} node={node} path="wiki" />
        ))}
      </section>
    </Layout>
  );
};

export default WikiPage;

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
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title={TITLE} />;
