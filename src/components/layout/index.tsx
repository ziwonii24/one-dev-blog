import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
  pageTitle: string;
  children: React.ReactNode;
};

export default function Layout({ pageTitle, children }: Props) {
  return (
    <div className="flex flex-col items-center h-screen w-screen">
      <Header />
      <div className="flex flex-col items-center w-full h-fulloverflow-y-auto">
        <main className="w-full xl:w-2/3 min-h-screen py-6 pl-4 pr-4">
          <h1 className="text-3xl font-bold tracking-tight mb-12">
            {pageTitle}
          </h1>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
