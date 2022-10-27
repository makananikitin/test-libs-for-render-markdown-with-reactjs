import { useState } from "react";
import { Remark } from "react-remark";
import { template } from "./markdown";

export const MyReactRemark = () => {
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
        <Remark>{text}</Remark>
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
