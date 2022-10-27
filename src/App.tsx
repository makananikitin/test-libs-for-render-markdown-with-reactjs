import "./App.css";
import { MyReactMarkdown } from "./test/MyReactMarkdown";
import { MyReactRemark } from "./test/MyReactRemark";

function App() {
  return (
    <>
      <h2 style={{ textAlign: "center" }}>
        &#128511; Test libs for render markdown with ReactJs &#128509;
      </h2>
      <div style={{ display: "flex", flexDirection: "row", gap: 16 }}>
        <div
          style={{
            display: "flex",
            padding: "8px",
            flex: "1 0 auto",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <a
            href="https://github.com/remarkjs/react-remark"
            target="_blank"
            rel="noreferrer"
          >
            <h3>React-Remark</h3>
          </a>
          <a
            href="https://remarkjs.github.io/react-remark/?path=/story/remark-hooks-sync-and-ssr-with-useremarksync--common-mark"
            target="_blank"
            rel="noreferrer"
          >
            Example
          </a>
          <MyReactRemark />
        </div>
        <div
          style={{
            display: "flex",
            padding: "8px",
            flex: "1 0 auto",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <a
            href="https://github.com/remarkjs/react-markdown"
            target="_blank"
            rel="noreferrer"
          >
            <h3>React-Markdown</h3>
          </a>
          <a
            href="https://remarkjs.github.io/react-markdown/"
            target="_blank"
            rel="noreferrer"
          >
            Example
          </a>
          <MyReactMarkdown />
        </div>
      </div>
    </>
  );
}

export default App;
