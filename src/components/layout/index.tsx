import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

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
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
