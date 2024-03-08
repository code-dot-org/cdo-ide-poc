import React from "react";

import "./styles/debugger-wrapper.css";

import { useCDOIDEContext } from "@cdoide/cdo-ide-context";

import { Debugger } from "./Debugger";

type DebuggerWrapperProps = React.PropsWithChildren & {
  contentFrameHeight?: string;
  debuggerOutput?: string[][];
};

export const DebuggerWrapper = ({
  contentFrameHeight = "1fr",
  debuggerOutput,
  children,
}: DebuggerWrapperProps) => {
  const { config } = useCDOIDEContext();

  return (
    <div
      className="debugger-wrapper"
      style={{
        gridTemplateRows: config.showDebug
          ? `${contentFrameHeight} 1fr`
          : "auto",
      }}
    >
      <div className="debugger-wrapper-child">{children}</div>
      <Debugger output={debuggerOutput} />
    </div>
  );
};
