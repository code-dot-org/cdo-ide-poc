import React, { useState, useRef, useEffect, useMemo } from "react";
import Sandbox from "websandbox";

import "./styles/js-preview.css";

import { DebuggerWrapper } from "@cdoide/debugger/DebuggerWrapper";
import { RunBar } from "@cdoide/run-bar";

import { ProjectFileType } from "@cdoide/types";

type JSPreviewProps = {
  file: ProjectFileType;
};

export const JSPreview = ({ file }: JSPreviewProps) => {
  const [output, setOutput] = useState<string[][]>([]);

  const runSandbox = () => {
    const debugApi = {
      consoleLog: (...messages: any[]) => {
        setOutput((o) => [...o, messages]);
        return Promise.resolve("messaged");
      },
    };

    for (let e of document.getElementsByClassName("js-preview-output")) {
      e.innerHTML = "";
    }
    Sandbox.create(debugApi, {
      frameContainer: ".js-preview-output",
    }).promise.then(function (sandbox) {
      setOutput([]);
      sandbox.run(
        `
        console.log = Websandbox.connection.remote.consoleLog;
        ${file.contents}
      `
      );
    });
  };

  return (
    <div className="js-preview-wrapper">
      <DebuggerWrapper contentFrameHeight="1fr" debuggerOutput={output}>
        <div className="js-preview-container">
          <div className="js-preview-output">pending...</div>
        </div>
      </DebuggerWrapper>
      <RunBar run={runSandbox} />
    </div>
  );
};
