import React from "react";
import { useCDOIDEContext } from "@cdoide/cdo-ide-context";

import "./styles/side-bar.css";

const defaultCallback = () => window.alert("Not implemented");

export const SideBar = () => {
  const {
    config: { sideBar },
  } = useCDOIDEContext();
  return (
    <div className="left-side-bar">
      {sideBar.map((i) => (
        <div key={i.icon} onClick={i.action} style={{ cursor: "pointer" }}>
          <i className={`fa-regular fa-2xl ${i.icon}`} />
          {i.label}
        </div>
      ))}
    </div>
  );
};
