import React from "react";
import "./styles/center-pane.css";

import { useCDOIDEContext } from "../cdo-ide-context";

import { FileNav } from "./FileNav";
import InternalEditor from "./InternalEditor";
//import InternalEditor from "./DisabledEditor";

export const CenterPane = () => {
  const { config } = useCDOIDEContext();

  const EditorComponent = config.EditorComponent || InternalEditor;

  return (
    <div className="center-pane">
      <div className="center-nav">
        <FileNav />
      </div>
      <div className="center-main">
        <EditorComponent />
      </div>
    </div>
  );
};
