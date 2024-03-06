import React, { useRef, useReducer, useEffect } from "react";
import {
  CDOIDEContextProvider,
  projectReducer,
  useProjectUtilities,
} from "./cdo-ide-context";
import {
  ProjectType,
  ConfigType,
  SetProjectFunction,
  SetConfigFunction,
} from "./types";

import { LeftPane } from "./left-pane";
import { CenterPane } from "./center-pane";
import { RightPane } from "./right-pane";
import { RunBar } from "./run-bar";

import "./styles/cdo-ide.css";

type CDOIDEProps = {
  project: ProjectType;
  config: ConfigType;
  setProject: SetProjectFunction;
  setConfig: SetConfigFunction;
};

export const CDOIDE = ({
  project,
  config,
  setProject,
  setConfig,
}: CDOIDEProps) => {
  // keep track of if we should fire the callback in case of a project change. The only time we
  // do -not- want to do it is if replaceProject was called, which only happens once in an effect here
  const shouldNotifyProjectUpdate = useRef(true);
  const [internalProject, dispatch] = useReducer(projectReducer, project);
  const projectUtilities = useProjectUtilities(dispatch);

  // now, when anything has been dispatched, and our internalProject has changed we should
  // notify the external callback. UNLESS it's been disabled.
  // regardless, we always re-enable updates after we're done.
  // There's only one time when we don't want to call the callback, and that's when
  // we're replacing the project itself in the next effect
  useEffect(() => {
    if (shouldNotifyProjectUpdate.current) {
      setProject(internalProject);
    }
    shouldNotifyProjectUpdate.current = true;
  }, [internalProject]);

  // okay, so if we replace the project itself, we need to confirm that it actually changed
  // so only do anything if the project is not the internalProject.
  // and do NOT fire off the setProject callback on this action and this action only. So we disable
  // updates. We'll re-enable them when the internalProject effect fires up above.
  useEffect(() => {
    if (project !== internalProject) {
      projectUtilities.replaceProject(project);
      shouldNotifyProjectUpdate.current = false;
    }
  }, [project, internalProject]);

  return (
    <CDOIDEContextProvider
      value={{
        project: internalProject,
        config,
        setProject,
        setConfig,
        ...projectUtilities,
      }}
    >
      <div
        className="cdo-ide-outer"
        style={{ gridTemplateRows: config.showRunBar ? "auto 40px" : "auto" }}
      >
        <div
          className="cdo-ide-inner"
          style={{
            gridTemplateColumns: config.showPreview ? "1fr 2fr 2fr" : "1fr 2fr",
          }}
        >
          <div className="cdo-ide-area">
            <LeftPane />
          </div>
          <div className="cdo-ide-area">
            <CenterPane />
          </div>
          {config.showPreview && <RightPane />}
        </div>
        {config.showRunBar && <RunBar />}
      </div>
    </CDOIDEContextProvider>
  );
};
