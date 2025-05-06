import * as React from "react";

const Post = ({
  date,
  children,
}: {
  date: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <div className="flex justify-between w-full">
        <p>{date}</p>
      </div>
      <div className="prose prose-neutral dark:prose-invert max-w-none mt-4">
        {children}
      </div>
    </div>
  );
};

export default Post;
