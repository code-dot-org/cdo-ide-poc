import React from "react";
import "./styles/file-nav.css";

import { useCDOIDEContext } from "@cdoide/cdo-ide-context";
import { sortFilesByName } from "@cdoide/utils";

export const FileNav = () => {
  const { project, closeFile, setActiveFile } = useCDOIDEContext();

  const files = sortFilesByName(project.files, { mustBeOpen: true });

  return (
    <div className="files-nav-bar">
      {files.map((f) => (
        <div className="file-tab" key={f.id} style={{ cursor: "pointer" }}>
          <span
            onClick={() => setActiveFile(f.id)}
            style={{ fontWeight: f.active ? "bold" : "normal" }}
          >
            {f.name}
          </span>
          <span onClick={() => closeFile(f.id)}>X</span>
        </div>
      ))}
    </div>
  );
};
