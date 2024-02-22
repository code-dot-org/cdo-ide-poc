import { useState } from "react";

import "./styles/App.css";

import { Config } from "./Config";

import { CDOIDE } from "./CDOIDE/CDOIDE";
import { ConfigType, ProjectType } from "./CDOIDE/types";
import { FakeEditor } from "./FakeEditor";

const defaultConfig: ConfigType = {
  showSideBar: true,
  showPreview: true,
  showRunBar: true,
  showDebug: true,
  activeLeftNav: "Files",
  //EditorComponent: FakeEditor,
  leftNav: [
    {
      icon: "fa-square-check",
      component: "Instructions",
    },
    {
      icon: "fa-file",
      component: "Files",
    },
    {
      icon: "fa-solid fa-magnifying-glass",
      component: "Search",
    },
  ],
  sideBar: ["fa-circle-question", "fa-folder"],
  instructions:
    "This is where some sort of instructions would go for this lesson",
};

const defaultProject: ProjectType = {
  folders: {
    "1": { id: "1", name: "foo", parentId: "0" },
    "2": { id: "2", name: "bar", parentId: "1" },
    "3": { id: "3", name: "baz", parentId: "0" },
  },
  files: {
    "1": {
      id: "1",
      name: "index.html",
      language: "html",
      contents: `<!DOCTYPE html><html>
  <link rel="stylesheet" href="styles.css"></style>
  <body>
    Content goes here!
    <div class="foo">Foo class!</div>
  </body>
</html>
`,
      open: true,
      active: true,
      folderId: "0",
    },
    "2": {
      id: "2",
      name: "styles.css",
      language: "css",
      contents: ".foo { color : red}",
      open: true,
      folderId: "0",
    },
    "3": {
      id: "3",
      name: "page.html",
      language: "html",
      contents:
        "<!DOCTYPE html><html><body>This is a separate html page</body></html>",
      open: false,
      folderId: "0",
    },
  },
};

const App = () => {
  const [project, setProject] = useState<ProjectType>(defaultProject);
  const [config, setConfig] = useState<ConfigType>(defaultConfig);
  const [showConfig, setShowConfig] = useState<"project" | "config" | "">("");

  return (
    <div className="app-wrapper">
      <div className="app-wrapper-nav">
        <button onClick={() => setShowConfig("project")}>Edit project</button>
        <button onClick={() => setShowConfig("config")}>Edit config</button>
      </div>
      <div className="app-ide">
        <CDOIDE
          project={project}
          config={config}
          setProject={setProject}
          setConfig={setConfig}
        />
      </div>
      {showConfig && (
        <Config
          config={showConfig === "project" ? project : config}
          setConfig={(
            configName: string,
            newConfig: ProjectType | ConfigType
          ) => {
            if (configName === "project") {
              setProject(newConfig as ProjectType);
            } else if (configName === "config") {
              setConfig(newConfig as ConfigType);
            }
            setShowConfig("");
          }}
          cancelConfig={() => setShowConfig("")}
          configName={showConfig}
        />
      )}
    </div>
  );
};

export default App;
