import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Header = () => {
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
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center justify-between pl-4 pr-4 border-b border-dashed">
        <h1 className="font-mono">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>

        <nav className="flex items-center gap-4 text-sm font-sans">
          <Link to="/" className="text-foreground/80">
            홈
          </Link>
          <Link to="/blog" className="text-foreground/80">
            블로그
          </Link>
          <Link to="/wiki" className="text-foreground/80">
            내 머릿속(이었으면)
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
