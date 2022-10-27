import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { template } from "./markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

import 'katex/dist/katex.min.css'

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
          remarkPlugins={[remarkGfm, remarkMath]}
          rehypePlugins={[rehypeKatex]}
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
