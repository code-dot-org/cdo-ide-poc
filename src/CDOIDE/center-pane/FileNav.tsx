import React from "react";
import "./styles/file-nav.css";

import { useCDOIDEContext } from "../cdo-ide-context";

export const FileNav = () => {
  const { project, closeFile, setActiveFile } = useCDOIDEContext();

  const files = Object.values(project.files)
    .filter((f) => f.open)
    .sort((a, b) => a.name.localeCompare(b.name));

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
