import React, { useState, useRef, useEffect } from "react";
import "./styles/right-pane.css";

import { useCDOIDEContext } from "../cdo-ide-context";
import { HTMLPreview } from "./HTMLPreview";
import { JSPreview } from "./JSPreview";
import { JSONPreview } from "./JSONPreview";

import { previewFileType } from "../utils";

const fileTypeMap = {
  html: HTMLPreview,
  js: JSPreview,
  json: JSONPreview,
};

export const RightPane = () => {
  const iframeRef = useRef(null);
  const {
    project: { files },
  } = useCDOIDEContext();
  const [previewFile, setPreviewFile] = useState(
    Object.values(files).find((f) => f.name === "page.html" && !f.folderId)
  );

  const activeFile = Object.values(files).find(
    (f) => f.active && previewFileType(f.language)
  ); //*/

  useEffect(() => {
    if (previewFileType(activeFile?.language)) {
      setPreviewFile(activeFile);
    }
  }, [activeFile]);

  const PreviewComponent = fileTypeMap[previewFile?.language];
  if (!PreviewComponent) {
    return <div>Cannot preview files of type {previewFile?.language}</div>;
  }

  return (
    <div className="right-pane">
      <select
        onChange={(e) => {
          const newFile = Object.values(files).find(
            (f) => f.id === e.target.value
          );
          setPreviewFile(newFile);
        }}
        value={previewFile?.id}
      >
        {Object.values(files)
          .sort()
          .filter((f) => previewFileType(f.language))
          .map((file) => (
            <option key={file.id} value={file.id}>
              {file.name}
            </option>
          ))}
      </select>
      {previewFile && <PreviewComponent file={previewFile} />}
    </div>
  );
};
