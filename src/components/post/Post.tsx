import * as React from "react";
import Category from "../Category";

type Props = {
  children: React.ReactNode;
  date: string;
  categories?: string[];
};

export default function Post({ children, date, categories }: Props) {
  return (
    <div>
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex flex-row gap-1">
          {categories?.map((category) => (
            <Category key={category} content={category} />
          ))}
        </div>
        <p className="text-sm text-foreground/50 font-mono">{date}</p>
      </div>
      <div className="prose prose-neutral dark:prose-invert max-w-none mt-8">
        {children}
      </div>
    </div>
  );
}
