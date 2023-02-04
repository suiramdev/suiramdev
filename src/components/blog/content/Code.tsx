import SyntaxHighlighter from "react-syntax-highlighter";

const style = {
  hljs: {
    display: "block",
    overflowX: "auto",
    padding: "0.5em",
    color: "#ddd",
  },
  "hljs-tag": {
    color: "#f92672",
  },
  "hljs-keyword": {
    color: "#f92672",
    fontWeight: "bold",
  },
  "hljs-selector-tag": {
    color: "#f92672",
    fontWeight: "bold",
  },
  "hljs-literal": {
    color: "#f92672",
    fontWeight: "bold",
  },
  "hljs-strong": {
    color: "#f92672",
  },
  "hljs-name": {
    color: "#f92672",
  },
  "hljs-code": {
    color: "#66d9ef",
  },
  "hljs-class .hljs-title": {
    color: "white",
  },
  "hljs-attribute": {
    color: "#bf79db",
  },
  "hljs-symbol": {
    color: "#bf79db",
  },
  "hljs-regexp": {
    color: "#bf79db",
  },
  "hljs-link": {
    color: "#bf79db",
  },
  "hljs-string": {
    color: "#a6e22e",
  },
  "hljs-bullet": {
    color: "#a6e22e",
  },
  "hljs-subst": {
    color: "#a6e22e",
  },
  "hljs-title": {
    color: "#a6e22e",
    fontWeight: "bold",
  },
  "hljs-section": {
    color: "#a6e22e",
    fontWeight: "bold",
  },
  "hljs-emphasis": {
    color: "#a6e22e",
  },
  "hljs-type": {
    color: "#a6e22e",
    fontWeight: "bold",
  },
  "hljs-built_in": {
    color: "#a6e22e",
  },
  "hljs-builtin-name": {
    color: "#a6e22e",
  },
  "hljs-selector-attr": {
    color: "#a6e22e",
  },
  "hljs-selector-pseudo": {
    color: "#a6e22e",
  },
  "hljs-addition": {
    color: "#a6e22e",
  },
  "hljs-variable": {
    color: "#a6e22e",
  },
  "hljs-template-tag": {
    color: "#a6e22e",
  },
  "hljs-template-variable": {
    color: "#a6e22e",
  },
  "hljs-comment": {
    color: "#75715e",
  },
  "hljs-quote": {
    color: "#75715e",
  },
  "hljs-deletion": {
    color: "#75715e",
  },
  "hljs-meta": {
    color: "#75715e",
  },
  "hljs-doctag": {
    fontWeight: "bold",
  },
  "hljs-selector-id": {
    fontWeight: "bold",
  },
};

type Props = {
  children: React.ReactNode;
  lang: string;
};

export default function Code({ children, lang, ...props }: Props) {
  return lang ? (
    <div
      className="relative my-4 p-5 border border-gray-700 border-dashed rounded-lg"
      {...props}
    >
      {lang && (
        <label className="absolute top-0 left-5 -translate-y-1/2 rounded-full px-1.5 shadow-[0_0_1px_3px_black] bg-gray-800 text-xs uppercase text-gray-300">
          {lang}
        </label>
      )}
      <SyntaxHighlighter language={lang} style={style} {...props}>
        {children}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className="px-2 py-1 border border-gray-700 border-dashed rounded-lg whitespace-pre-wrap">
      {children}
    </code>
  );
}
