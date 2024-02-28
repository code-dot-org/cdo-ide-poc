export type LeftNavElement = {
  icon: string;
  component: string;
};

export type ConfigType = {
  showSideBar: boolean;
  showPreview: boolean;
  showRunBar: boolean;
  showDebug: boolean;
  activeLeftNav: string;
  sideBar: string[];
  instructions: string | undefined;
  leftNav: LeftNavElement[];
  EditorComponent?: () => JSX.Element;
};

export type ProjectFolderType = {
  id: string;
  name: string;
  parentId: string;
  open?: boolean;
};

export type ProjectFileType = {
  id: string;
  name: string;
  language: string;
  contents: string;
  open?: boolean;
  active?: boolean;
  folderId: string;
};

export type ProjectType = {
  folders: Record<string, ProjectFolderType>;
  files: Record<string, ProjectFileType>;
};

export type SetProjectFunction = (project: ProjectType) => void;
export type SetConfigFunction = (project: ConfigType) => void;

export type ReducerAction = {
  type: string;
  payload: unknown;
};

export const PROJECT_REDUCER_ACTIONS = {
  NEW_FILE: "NEW_FILE",
  RENAME_FILE: "RENAME_FILE",
  SAVE_FILE: "SAVE_FILE",
  OPEN_FILE: "OPEN_FILE",
  ACTIVATE_FILE: "ACTIVATE_FILE",
  CLOSE_FILE: "CLOSE_FILE",
  DELETE_FILE: "DELETE_FILE",
  NEW_FOLDER: "NEW_FOLDER",
  TOGGLE_OPEN_FOLDER: "TOGGLE_OPEN_FOLDER",
  DELETE_FOLDER: "DELETE_FOLDER",
  RENAME_FOLDER: "RENAME_FOLDER",
};
