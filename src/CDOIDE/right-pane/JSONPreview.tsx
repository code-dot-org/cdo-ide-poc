import React from "react";

import "./styles/json-preview.css";

import { ProjectFileType } from "../types";

type JSONPreviewProps = {
  file: ProjectFileType;
};

export const JSONPreview = ({ file }: JSONPreviewProps) => {
  let formatted = "";
  try {
    formatted = JSON.stringify(JSON.parse(file.contents), undefined, 2);
  } catch (e) {
    return (
      <div className="json-preview">
        Cannot display json: invalid format.
        {e.message}
      </div>
    );
  }

  return <div className="json-preview">{formatted}</div>;
};
