import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";

const TITLE = "Home Page";

const IndexPage = () => {
  return (
    <Layout pageTitle={TITLE}>
      <p>This is Home Page.</p>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title={TITLE} />;
