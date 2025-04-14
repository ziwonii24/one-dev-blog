import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Layout = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: React.ReactNode;
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="border border-solid flex flex-col items-center h-screen">
      <header className="border border-solid border-black flex justify-between items-center w-full">
        <h1>{data.site.siteMetadata.title}</h1>
        <nav>
          <ul className="border border-solid border-black flex flex-row gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/wiki">Wiki</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="flex flex-col items-center w-full overflow-y-auto">
        <main className="border border-solid border-black w-full max-w-2xl min-h-screen">
          <h1>{pageTitle}</h1>
          {children}
        </main>
        <footer className="border border-solid border-black w-full flex justify-between items-center">
          <p>Since 2025</p>
          <div>some links</div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
