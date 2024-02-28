import React, { useState, useRef, useEffect } from "react";
import "./styles/right-pane.css";

import { useCDOIDEContext } from "../cdo-ide-context";
import { HTMLPreview } from "./HTMLPreview";
import { JSPreview } from "./JSPreview";
import { JSONPreview } from "./JSONPreview";

import { previewFileType } from "../utils";
import { ProjectFileType } from "../types";

const fileTypeMap: {
  [key: string]: (args: { file: ProjectFileType }) => JSX.Element;
} = {
  html: HTMLPreview,
  js: JSPreview,
  json: JSONPreview,
};

const getPreviewComponent = (previewFile?: ProjectFileType) => {
  if (!previewFile) {
    return () => "";
  } else if (fileTypeMap[previewFile?.language!]) {
    return fileTypeMap[previewFile?.language!];
  } else {
    return () => (
      <div>Cannot preview files of type {previewFile?.language}</div>
    );
  }
};

export const RightPane = () => {
  const {
    project: { files },
  } = useCDOIDEContext();
  const [previewFile, setPreviewFile] = useState(
    Object.values(files).find((f) => f.name === "index.html" && !f.folderId)
  );

  const activeFile = Object.values(files).find(
    (f) => f.active && previewFileType(f.language)
  ); //*/

  useEffect(() => {
    if (previewFileType(activeFile?.language!)) {
      setPreviewFile(activeFile);
    }
  }, [activeFile]);

  useEffect(() => {
    if (previewFile && !files[previewFile.id]) {
      setPreviewFile(
        Object.values(files).find((f) => previewFileType(f.language))
      );
    }
  }, [previewFile, files]);

  const PreviewComponent = getPreviewComponent(previewFile);

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
