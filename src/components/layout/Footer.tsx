import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const Footer = () => {
  return (
    <footer className="w-full h-14 flex justify-center border-t border-dashed">
      <div className="w-full xl:w-2/3 h-14 flex items-center justify-between pl-4 pr-4">
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
      </div>
    </footer>
  );
};

export default Footer;
