import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";
import { Button } from "@/components/ui/button";
const TITLE = "Home Page";

const IndexPage = () => {
  return (
    <Layout pageTitle={TITLE}>
      <p>This is Home Page.</p>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Click me</Button>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title={TITLE} />;
