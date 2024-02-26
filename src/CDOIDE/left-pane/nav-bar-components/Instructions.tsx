import React from "react";
import { useCDOIDEContext } from "../../cdo-ide-context";

export const Instructions = () => {
  const {
    config: { instructions },
  } = useCDOIDEContext();
  return <div>{instructions}</div>;
};
