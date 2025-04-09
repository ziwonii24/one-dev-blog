import * as React from "react";
import Seo from "../../components/seo";
import Layout from "../../components/layout";
import { Link, graphql } from "gatsby";

const TITLE = "Blog Page";

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle={TITLE}>
      {data.allMdx.nodes.map((node) => (
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

export const Head = () => <Seo title={TITLE} />;
