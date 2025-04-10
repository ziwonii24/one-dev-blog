import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";

const TITLE = "About Page";

const AboutPage = () => {
  return (
    <Layout pageTitle={TITLE}>
      <p>This is About Page.</p>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => <Seo title={TITLE} />;
