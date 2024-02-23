import { useCallback } from "react";

import { useCDOIDEContext } from "../CDOIDEContext";

import CodeMirror from "@uiw/react-codemirror";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript as js } from "@codemirror/lang-javascript";
import { json } from "@codemirror/lang-json";
import prettier from "prettier/standalone";
import htmlParser from "prettier/plugins/html";
import cssParser from "prettier/plugins/postcss";

import { SaveFileFunction } from "./types";
import { editableFileType } from "../utils";

const codeMirrorLangMapping = {
  html: html(),
  css: css(),
  js: js(),
  json: json(),
};

const prettify = async (val: string, language: string) => {
  if (language !== "html" && language !== "css") {
    return val;
  }

  const formatted = await prettier.format(val, {
    parser: language,
    plugins: [cssParser, htmlParser],
    tabWidth: 2,
    htmlWhitespaceSensitivity: "ignore",
  });

  return formatted;
};

type EditorProps = {
  saveFile: SaveFileFunction;
};

const Editor = ({ saveFile = () => {} }: EditorProps) => {
  const { project } = useCDOIDEContext();

  const file = Object.values(project.files).filter((f) => f.active)?.[0];

  const onChange = useCallback(
    (value: string) => {
      saveFile(file.id, value);
    },
    [file]
  );

  const format = async () => {
    const prettified = await prettify(file.contents, file.language);
    saveFile(file.id, prettified);
  };

  if (!editableFileType(file.language)) {
    return (
      <div>
        Can only edit html, css, or javascript files. Cannot edit{" "}
        {file.language} files.
      </div>
    );
  }

  return (
    <div className="editor-container">
      <button onClick={() => format()}>Format</button>
      {file && (
        <CodeMirror
          value={file.contents}
          width="100%"
          height="10)%"
          extensions={[codeMirrorLangMapping[file.language]]}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default Editor;
