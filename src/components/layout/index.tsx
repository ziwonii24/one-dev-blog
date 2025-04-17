import * as React from "react";
import Header from "./Header";
const Layout = ({
  pageTitle,
  children,
}: {
  pageTitle: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="border border-solid flex flex-col items-center h-screen">
      <Header />
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
