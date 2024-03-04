declare module "cdo-ide-poc" {
/// <reference types="react" />

import { JSX as JSX_2 } from 'react/jsx-runtime';
import { default as React_2 } from 'react';

export declare const CDOIDE: ({ project, config, setProject, setConfig, }: CDOIDEProps) => JSX_2.Element;

export declare const CDOIDEContext: React_2.Context<CDOIDEContextType | null>;

export declare const CDOIDEContextProvider: ({ children, value, }: CDOIDEContextProviderType) => JSX_2.Element;

declare type CDOIDEContextProviderType = {
    children: React_2.ReactNode;
    value: CDOIDEContextType;
};

declare type CDOIDEContextType = {
    project: ProjectType;
    config: ConfigType;
    setProject: SetProjectFunction;
    setConfig: SetConfigFunction;
    saveFile: SaveFileFunction;
    closeFile: CloseFileFunction;
    setActiveFile: SetActiveFileFunction;
    newFolder: NewFolderFunction;
    toggleOpenFolder: ToggleOpenFolderFunction;
    deleteFolder: DeleteFolderFunction;
    openFile: OpenFileFunction;
    deleteFile: DeleteFileFunction;
    newFile: NewFileFunction;
    renameFile: RenameFileFunction;
    renameFolder: RenameFolderFunction;
};

declare type CDOIDEProps = {
    project: ProjectType;
    config: ConfigType;
    setProject: SetProjectFunction;
    setConfig: SetConfigFunction;
};

export declare type CloseFileFunction = (fileId: string) => void;

export declare type ConfigType = {
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

export declare type DeleteFileFunction = (fileId: string) => void;

export declare type DeleteFolderFunction = (folderId: string) => void;

export declare const editableFileType: (language: string) => boolean;

export declare const findFiles: (folderId: string, files: ProjectFileType[], folders?: ProjectFolderType[]) => string[];

export declare const findSubFolders: (parentId: string, folders: ProjectFolderType[]) => string[];

export declare const getNextFileId: (files: ProjectFileType[]) => string;

export declare const getNextFolderId: (folders: ProjectFolderType[]) => string;

export declare type LeftNavElement = {
    icon: string;
    component: string;
};

export declare type NewFileFunction = (arg: {
    fileId: string;
    fileName: string;
    folderId?: string;
    contents?: string;
}) => void;

export declare type NewFolderFunction = (arg: {
    folderId: string;
    folderName: string;
    parentId?: string;
}) => void;

export declare type OpenFileFunction = (fileId: string) => void;

export declare const previewFileType: (language: string) => boolean;

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

export declare type ProjectFileType = {
    id: string;
    name: string;
    language: string;
    contents: string;
    open?: boolean;
    active?: boolean;
    folderId: string;
};

export declare type ProjectFolderType = {
    id: string;
    name: string;
    parentId: string;
    open?: boolean;
};

export declare const projectReducer: (project: ProjectType, action: ReducerAction) => ProjectType;

export declare type ProjectType = {
    folders: Record<string, ProjectFolderType>;
    files: Record<string, ProjectFileType>;
};

export declare type ReducerAction = {
    type: string;
    payload: unknown;
};

export declare type RenameFileFunction = (fileId: string, newName: string) => void;

export declare type RenameFolderFunction = (folderId: string, newName: string) => void;

export declare type SaveFileFunction = (fileId: string, contents: string) => void;

export declare type SetActiveFileFunction = (fileId: string) => void;

export declare type SetConfigFunction = (project: ConfigType) => void;

export declare type SetProjectFunction = (project: ProjectType) => void;

export declare type ToggleOpenFolderFunction = (folderId: string) => void;

export declare const useCDOIDEContext: () => CDOIDEContextType;

export declare const useProjectUtilities: (dispatch: React.Dispatch<ReducerAction>) => {
    newFile: NewFileFunction;
    renameFile: RenameFileFunction;
    saveFile: SaveFileFunction;
    openFile: OpenFileFunction;
    closeFile: CloseFileFunction;
    deleteFile: DeleteFileFunction;
    setActiveFile: SetActiveFileFunction;
    newFolder: NewFolderFunction;
    renameFolder: RenameFolderFunction;
    toggleOpenFolder: ToggleOpenFolderFunction;
    deleteFolder: DeleteFolderFunction;
};

export { }
}
