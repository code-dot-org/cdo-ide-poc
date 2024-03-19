import React from "react";
import { ProjectFileType } from "@cdoide/types";
import { useCDOIDEContext } from "@cdoide/cdo-ide-context";

interface FileTabProps {
  file: ProjectFileType;
}

const FileTab: React.FunctionComponent<FileTabProps> = ({
  file,
}) => {
  const { closeFile, setActiveFile } = useCDOIDEContext();

  return (
    <div className={`file-tab ${file.active ? "active" : ""}`} key={file.id}>
      <span onClick={() => setActiveFile(file.id)}>
        <i className="fa-solid fa-file" />
        &nbsp;
        {file.name}
      </span>
      <button
        type="button"
        className="inline-button"
        onClick={() => closeFile(file.id)}
      >
        <i className="fa-solid fa-x"></i>
      </button>
    </div>
  );
};

export default FileTab;
