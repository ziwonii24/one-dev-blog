import * as React from "react";

type Props = {
  children: React.ReactNode;
  date: string;
  categories?: string[];
};

export default function Post({ children, date, categories }: Props) {
  return (
    <div>
      <div className="flex justify-between w-full">
        {categories?.map((c) => (
          <p key={c} className="text-sm text-foreground/50 font-mono">
            {c}
          </p>
        ))}
        <p className="text-sm text-foreground/50 font-mono">{date}</p>
      </div>
      <div className="prose prose-neutral dark:prose-invert max-w-none mt-4">
        {children}
      </div>
    </div>
  );
}
