import React from "react";
import type { GatsbySSR } from "gatsby";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHeadComponents,
}) => {
  setHeadComponents([
    <link
      key="favicon"
      rel="icon"
      href="/favicon.ico" // 또는 .ico 확장자
      type="image/png"
    />,
  ]);
};
