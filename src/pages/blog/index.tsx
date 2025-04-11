import * as React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";

const TITLE = "Blog";

const BlogPage = ({ data }: { data: any }) => {
  return (
    <Layout pageTitle={TITLE}>
      {data.allMdx.nodes.map((node: any) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
          <small>{node.frontmatter.date}</small>
          <p>{node.excerpt}</p>
        </article>
      ))}
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title={TITLE} />;
