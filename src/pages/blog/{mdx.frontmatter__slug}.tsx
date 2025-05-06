import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import Post from "@/components/Post";

const TITLE = "Blog Post";

const BlogPost = ({
  data,
  children,
}: {
  data: any;
  children: React.ReactNode;
}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <Post date={data.mdx.frontmatter.date}>{children}</Post>
    </Layout>
  );
};

export default BlogPost;

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
        slug
      }
    }
  }
`;

export const Head = () => <Seo title={TITLE} />;
