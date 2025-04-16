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
        <h1>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
        <nav>
          <ul className="border border-solid border-black flex flex-row gap-4">
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/blog">블로그</Link>
            </li>
            <li>
              <Link to="/wiki">내 머릿속(이었으면)</Link>
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
          <p>Copyright ⓒ jiwonChoi 2025</p>
          <div>some links</div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
