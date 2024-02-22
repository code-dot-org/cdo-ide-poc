import React from "react";
import "./styles/center-pane.css";

import { useCDOIDEContext } from "../CDOIDEContext";

import { FileNav } from "./FileNav";
import { Debugger } from "./Debugger";
import InternalEditor from "./InternalEditor";

import {
  SaveFileFunction,
  CloseFileFunction,
  SetActiveFileFunction,
} from "./types";

export const CenterPane = () => {
  const { config, project, setProject } = useCDOIDEContext();

  const EditorComponent = config.EditorComponent || InternalEditor;

  const saveFile: SaveFileFunction = (fileId, contents) => {
    setProject({
      ...project,
      files: {
        ...project.files,
        [fileId]: { ...project.files[fileId], contents },
      },
    });
  };

  const closeFile: CloseFileFunction = (fileId) => {
    setProject({
      ...project,
      files: {
        ...project.files,
        [fileId]: { ...project.files[fileId], open: false },
      },
    });
  };

  const setActiveFile: SetActiveFileFunction = (fileId) => {
    console.log("SAF : ", fileId);
    const activeFile = Object.values(project.files).filter(
      (f) => f.active
    )?.[0];

    const newProject = {
      ...project,
      files: {
        ...project.files,
        [fileId]: { ...project.files[fileId], active: true },
      },
    };

    if (activeFile) {
      newProject.files[activeFile.id].active = false;
    }

    if (activeFile?.id !== fileId) {
      setProject(newProject);
    }
  };

  return (
    <div
      className="center-pane"
      style={{
        gridTemplateRows: config.showDebug ? "32px 1fr 1fr" : "32px auto",
      }}
    >
      <div className="center-nav">
        <FileNav setActiveFile={setActiveFile} closeFile={closeFile} />
      </div>
      <div className="center-main">
        <EditorComponent saveFile={saveFile} />
      </div>
      {config.showDebug && <Debugger />}
    </div>
  );
};
