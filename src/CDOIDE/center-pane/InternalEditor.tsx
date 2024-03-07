import { useState, useCallback } from "react";

import { useCDOIDEContext } from "../cdo-ide-context";

import CodeMirror from "@uiw/react-codemirror";

import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript as js } from "@codemirror/lang-javascript";
import { json } from "@codemirror/lang-json";
import { LanguageSupport } from "@codemirror/language";

import { editableFileType, prettify } from "../utils";
import { useEmptyEditor } from "../hooks";
import { EditorTheme } from "./types";

const codeMirrorLangMapping: { [key: string]: LanguageSupport } = {
  html: html(),
  css: css(),
  js: js(),
  json: json(),
};

const Editor = () => {
  const [theme, setTheme] = useState<EditorTheme>("light");
  const {
    project,
    saveFile,
    config: { editableFileTypes },
  } = useCDOIDEContext();
  const EmptyEditor = useEmptyEditor();

  const file = Object.values(project.files).filter((f) => f.active)?.[0];

  const onChange = useCallback(
    (value: string) => {
      saveFile(file.id, value);
    },
    [saveFile, file]
  );

  const format = async () => {
    try {
      const prettified = await prettify(file.contents, file.language);
      saveFile(file.id, prettified);
    } catch (e) {
      console.log("FAILURE : ", e);
    }
  };

  if (!file) {
    return <EmptyEditor />;
  }

  if (!editableFileType(file.language, editableFileTypes)) {
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
      <select onChange={(e) => setTheme(e.target.value as EditorTheme)}>
        <option value="light">light theme</option>
        <option value="dark">dark theme</option>
      </select>
      {file && (
        <CodeMirror
          value={file.contents}
          width="100%"
          height="100%"
          extensions={[codeMirrorLangMapping[file.language]]}
          onChange={onChange}
          theme={theme}
        />
      )}
    </div>
  );
};

export default Editor;
