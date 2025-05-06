import * as React from "react";
import { Link } from "gatsby";
import { Badge } from "./ui/badge";

type Props = {
  content: string;
};

export default function Category({ content }: Props) {
  return (
    <Link to={`/category/${content}`}>
      <Badge>{content}</Badge>
    </Link>
  );
}
