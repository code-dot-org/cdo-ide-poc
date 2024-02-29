/// <reference types="react" />
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
export declare const PROJECT_REDUCER_ACTIONS: {
    NEW_FILE: string;
    RENAME_FILE: string;
    SAVE_FILE: string;
    OPEN_FILE: string;
    ACTIVATE_FILE: string;
    CLOSE_FILE: string;
    DELETE_FILE: string;
    NEW_FOLDER: string;
    TOGGLE_OPEN_FOLDER: string;
    DELETE_FOLDER: string;
    RENAME_FOLDER: string;
};
