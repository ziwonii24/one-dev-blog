export type TPostNode = {
  frontmatter: {
    title: string;
    date: string;
    slug: string;
    hero_image: any;
    hero_image_alt: string;
    category: string[];
    path: string;
  };
  id: string;
  excerpt: string;
};

export type TPostsData = {
  allMdx: {
    nodes: TPostNode[];
  };
};

export type TPostData = {
  mdx: TPostNode;
};
