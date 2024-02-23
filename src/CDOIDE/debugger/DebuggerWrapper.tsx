import React from "react";

import "./styles/debugger-wrapper.css";

import { useCDOIDEContext } from "../CDOIDEContext";

import { Debugger } from "./Debugger";

type DebuggerWrapperProps = React.PropsWithChildren & {
  contentFrameHeight?: string;
};

export const DebuggerWrapper = ({
  contentFrameHeight = "1fr",
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
      {config.showDebug && <Debugger />}
    </div>
  );
};
