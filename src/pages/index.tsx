import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import Category from "@/components/Category";
import { TPostsData, TPostNode } from "@/types/post";

const TITLE = "Home";

type Props = {
  data: TPostsData;
};

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          category
          title
          slug
          path
        }
      }
    }
  }
`;

export const Head = () => <Seo title={TITLE} />;

export default function IndexPage({ data }: Props) {
  const allCategories = data.allMdx.nodes.flatMap(
    (node: TPostNode) => node.frontmatter.category
  );
  const uniqueCategories = [...new Set(allCategories)];
  return (
    <Layout pageTitle={TITLE}>
      <div>
        <div className="flex flex-col gap-2">
          <p className="text-foreground/80 font-mono tracking-wide">
            Life begins outside of your comfort zone.
          </p>
          <p className="text-foreground/70 font-mono tracking-wide">
            안전지대를 벗어나야 인생이 시작된다.
          </p>
        </div>
        <div className="mt-20 flex flex-row flex-wrap gap-1 w-full h-auto">
          {uniqueCategories.map((category) => (
            <Category key={category} content={category} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
