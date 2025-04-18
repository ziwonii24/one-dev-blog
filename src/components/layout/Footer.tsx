import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex min-h-14 items-center justify-between pl-4 pr-4 border-t border-dashed">
      <p className="font-mono text-sm text-foreground/80">
        Copyright ⓒ jiwonChoi 2025
      </p>
      <ul className="flex items-center gap-2">
        <li>
          <a href="https://github.com/ziwonii24">
            <StaticImage
              src="../../images/github.svg"
              alt="github"
              width={20}
              height={20}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
