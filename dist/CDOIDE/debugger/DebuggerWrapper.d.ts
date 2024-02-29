import React from "react";
import "./styles/debugger-wrapper.css";
type DebuggerWrapperProps = React.PropsWithChildren & {
    contentFrameHeight?: string;
    debuggerOutput?: string[][];
};
export declare const DebuggerWrapper: ({ contentFrameHeight, debuggerOutput, children, }: DebuggerWrapperProps) => import("react/jsx-runtime").JSX.Element;
export {};
