import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { template } from "./markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import remarkLinkifyModifier from "remark-linkify-modifier";

import "katex/dist/katex.min.css";
import rehypeExternalLinks from "rehype-external-links";

export const MyReactMarkdown = () => {
  const [text, setText] = useState(template);

  return (
    <div style={{ padding: 16, width: "90%" }}>
      <div
        style={{
          height: "50vh",
          maxHeight: "50vh",
          width: "40vw",
          overflow: "auto",
          padding: 8,
          margin: 8,
        }}
      >
        <ReactMarkdown
          remarkPlugins={[
            remarkGfm,
            remarkLinkifyModifier({
              regex:
                /([a-zA-Z]+[a-zA-Z0-9]*)\.([a-zA-Z0-9]+)\.([a-zA-Z0-9]{2,})(((\/)|(\?[a-zA-Z]{1}[^\s]*\=))[^\s]*([a-zA-Z0-9\&\=\-\_\%\/\~\#\$\*\+]))?/,
              modifier: {
                modifyLink: (link) => "http://" + link,
              },
            }),
            remarkMath,
          ]}
          rehypePlugins={[
            rehypeKatex,
            [rehypeExternalLinks, { target: "_blank" }],
          ]}
        >
          {text}
        </ReactMarkdown>
      </div>
      <textarea
        style={{
          height: 180,
          width: "90%",
          maxWidth: "100%",
          padding: 16,
        }}
        value={text}
        onChange={({ target: { value } }) => setText(value)}
      />
    </div>
  );
};
