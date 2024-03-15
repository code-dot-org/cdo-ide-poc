import React, { useRef, useMemo } from "react";

import { useCDOIDEContext } from "@cdoide/cdo-ide-context";
import { ProjectFileType } from "@cdoide/types";
import { findFolder } from "@cdoide/utils";

type HTMLPreviewProps = {
  file: ProjectFileType;
};

export const HTMLPreview = ({ file }: HTMLPreviewProps) => {
  const iframeRef = useRef(null);
  const {
    project: { files, folders },
  } = useCDOIDEContext();

  const srcdoc = useMemo(() => {
    if (!file) {
      return "";
    }

    const contents = file.contents.replace(
      new RegExp('<link rel="stylesheet" href="([^"]+)"\\s*/>', "g"),
      (_, styleURI) => {
        // this is tedious. Break apart the style URI and look up all folders to get the final folder ID.
        // THEN look for a file with the same name and folder and that's what we need.

        const styleFolders = styleURI.split("/");
        const styleName = styleFolders.pop();

        const folderId = findFolder(styleFolders, {
          folders: Object.values(folders),
        });

        const styleFile = Object.values(files).find(
          (f) => f.name === styleName && f.folderId === folderId
        );

        return `
          <style>
            ${styleFile?.contents}
          </style>
      `;
      }
    );

    return contents;
  }, [files, file]);

  return (
    <>
      {file && (
        <iframe
          sandbox=""
          allow="self"
          title="Web Preview"
          ref={iframeRef}
          id="preview"
          style={{ width: "100%", height: "100%", backgroundColor: "white" }}
          srcDoc={srcdoc}
        />
      )}
    </>
  );
};
