import React, { useState, useRef, useEffect } from "react";
import "./styles/right-pane.css";

import { useCDOIDEContext } from "../CDOIDEContext";
import { HTMLPreview } from "./HTMLPreview";

function updatePreview({
  styles = "",
  html = "",
  iframe = null,
}: {
  styles: string | undefined;
  html: string | undefined;
  iframe: HTMLIFrameElement | null;
}) {
  const styleString = `
    <style>
      ${styles}
    </style>
`;

  if (iframe?.contentWindow) {
    iframe.contentWindow.document.head.innerHTML = styleString;

    iframe.contentWindow.document.body.innerHTML = html;
  }
}

export const RightPane = () => {
  const {
    project: { files },
  } = useCDOIDEContext();
  const [previewFile, setPreviewFile] = useState(
    Object.values(files).find((f) => f.name === "page.html" && !f.folderId)?.id
  );

  const activeFile = Object.values(files).find(
    (f) => f.active && f.language === "html"
  ); //*/

  useEffect(() => {
    if (activeFile?.language === "html") {
      setPreviewFile(activeFile.id);
    }
  }, [activeFile]);

  /*useEffect(() => {
    if (previewFile) {
      updatePreview({
        styles: files["styles.css"].contents,
        html: files[previewFile].contents,
        iframe: iframeRef.current,
      });
    }
  }, [files, previewFile]);*/

  const iframeRef = useRef(null);
  return (
    <div className="right-pane">
      <select
        onChange={(e) => setPreviewFile(e.target.value)}
        value={previewFile}
      >
        {Object.values(files)
          .sort()
          .filter((f) => f.language === "html")
          .map((file) => (
            <option key={file.id} value={file.id}>
              {file.name}
            </option>
          ))}
      </select>
      {previewFile && <HTMLPreview file={previewFile} />}
    </div>
  );
};
