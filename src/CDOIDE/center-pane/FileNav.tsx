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
        <div className={`file-tab ${f.active ? "active" : ""}`} key={f.id}>
          <span onClick={() => setActiveFile(f.id)}>
            <i className="fa-solid fa-file" />
            &nbsp;
            {f.name}
          </span>
          <button
            type="button"
            className="inline-button"
            onClick={() => closeFile(f.id)}
          >
            <i className="fa-solid fa-x"></i>
          </button>
        </div>
      ))}
    </div>
  );
};
