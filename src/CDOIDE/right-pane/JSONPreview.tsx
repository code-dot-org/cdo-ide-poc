import React from "react";

import "./styles/json-preview.css";

import { ProjectFileType } from "@cdoide/types";
import { getErrorMessage } from "@cdoide/utils";

type JSONPreviewProps = {
  file: ProjectFileType;
};

export const JSONPreview = ({ file }: JSONPreviewProps) => {
  let formatted = "";
  try {
    formatted = JSON.stringify(JSON.parse(file.contents), undefined, 2);
  } catch (e) {
    const msg = getErrorMessage(e);
    return (
      <div className="json-preview">
        Cannot display json: invalid format.
        {msg}
      </div>
    );
  }

  return <div className="json-preview">{formatted}</div>;
};
