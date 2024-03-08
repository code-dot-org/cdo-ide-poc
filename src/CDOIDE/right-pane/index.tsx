import React, { useState, useRef, useEffect } from "react";
import "./styles/right-pane.css";

import { useCDOIDEContext } from "@cdoide/cdo-ide-context";
import { HTMLPreview } from "./HTMLPreview";
import { JSPreview } from "./JSPreview";
import { JSONPreview } from "./JSONPreview";

import { previewFileType } from "@cdoide/utils";
import { ProjectFileType, ConfigType } from "@cdoide/types";

const fileTypeMap: {
  [key: string]: (args: { file: ProjectFileType }) => JSX.Element;
} = {
  html: HTMLPreview,
  js: JSPreview,
  json: JSONPreview,
};

const getPreviewComponent = (
  previewFile: ProjectFileType | undefined,
  previewComponents: ConfigType["PreviewComponents"] = {}
) => {
  if (!previewFile) {
    return () => "";
  } else if (previewComponents[previewFile?.language!]) {
    return previewComponents[previewFile?.language!];
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
    config: { previewFileTypes, PreviewComponents },
  } = useCDOIDEContext();
  const [previewFile, setPreviewFile] = useState(
    Object.values(files).find((f) => f.name === "index.html" && !f.folderId)
  );

  const activeFile = Object.values(files).find(
    (f) => f.active && previewFileType(f.language)
  ); //*/

  useEffect(() => {
    if (previewFileType(activeFile?.language!, previewFileTypes)) {
      setPreviewFile(activeFile);
    }
  }, [activeFile]);

  useEffect(() => {
    if (previewFile && !files[previewFile.id]) {
      setPreviewFile(
        Object.values(files).find((f) =>
          previewFileType(f.language, previewFileTypes)
        )
      );
    }
  }, [previewFile, files]);

  const PreviewComponent = getPreviewComponent(previewFile, PreviewComponents);

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
          .filter((f) => previewFileType(f.language, previewFileTypes))
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
