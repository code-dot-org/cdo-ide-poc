import React, { useRef, useMemo } from "react";

import { useCDOIDEContext } from "../cdo-ide-context";
import { ProjectFileType } from "../types";

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
      new RegExp('<link rel="stylesheet" href="([^"]+)"></style>', "g"),
      (_, styleURI) => {
        // this is tedious. Break apart the style URI and look up all folders to get the final folder ID.
        // THEN look for a file with the same name and folder and that's what we need.

        const styleFolders = styleURI.split("/");
        const styleName = styleFolders.pop();

        const folderId = styleFolders.reduce(
          (parentId: string, name: string) => {
            const folder = Object.values(folders).find(
              (f) => f.name === name && f.parentId === parentId
            ) || { id: "0" };

            return folder.id;
          },
          "0"
        );

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

  /*useEffect(() => {
    if (file) {
      updatePreview({
        styles: files["styles.css"].contents,
        html: files[file].contents,
        iframe: iframeRef.current,
      });
    }
  }, [files, file]);*/

  return (
    <>
      {file && (
        <iframe
          allow="self"
          title="Web Preview"
          ref={iframeRef}
          id="preview"
          style={{ width: "100%", height: "100%" }}
          srcDoc={srcdoc}
        />
      )}
    </>
  );
};
