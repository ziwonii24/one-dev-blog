import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import Post from "@/components/post/Post";
import { TPostData } from "@/types/post";

const TITLE = "Blog Post";

type Props = {
  data: TPostData;
  children: React.ReactNode;
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "YYYY년 MM월 DD일")
        slug
        category
      }
    }
  }
`;

export const Head = () => <Seo title={TITLE} />;

export default function BlogPost({ data, children }: Props) {
  const { title, date, category } = data.mdx.frontmatter;
  return (
    <Layout pageTitle={title}>
      <Post date={date} categories={category}>
        {children}
      </Post>
    </Layout>
  );
}
