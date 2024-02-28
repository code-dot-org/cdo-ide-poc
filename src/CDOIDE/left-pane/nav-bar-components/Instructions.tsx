import React from "react";
import { useCDOIDEContext } from "../../cdo-ide-context";

import "./styles/instructions.css";

export const Instructions = () => {
  const {
    config: { instructions },
  } = useCDOIDEContext();
  return <div className="instructions">{instructions}</div>;
};
