import * as path from "path";
import type { GatsbyNode } from "gatsby";

// 1. Webpack alias 설정
export const onCreateWebpackConfig = ({ actions }: { actions: any }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/components": path.resolve(__dirname, "src/components"),
        "@/lib/utils": path.resolve(__dirname, "src/lib/utils"),
      },
    },
  });
};

// 2. 카테고리 페이지 자동 생성
export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx {
        group(field: frontmatter___category) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    throw new Error(JSON.stringify(result.errors));
  }

  const categories = (result as any).data.allMdx.group;

  categories.forEach((cat: { fieldValue: string }) => {
    createPage({
      path: `/category/${cat.fieldValue}`,
      component: path.resolve("./src/templates/category-template.tsx"),
      context: {
        category: cat.fieldValue,
      },
    });
  });
};
