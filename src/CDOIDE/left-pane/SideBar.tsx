import React from "react";
import { useCDOIDEContext } from "../cdo-ide-context";

import "./styles/side-bar.css";

export const SideBar = () => {
  const {
    config: { sideBar },
  } = useCDOIDEContext();
  return (
    <div className="left-side-bar">
      {sideBar.map((i) => (
        <div
          key={i}
          onClick={() => alert("not implemented")}
          style={{ cursor: "pointer" }}
        >
          <i className={`fa-regular fa-2xl ${i}`} />
        </div>
      ))}
    </div>
  );
};
