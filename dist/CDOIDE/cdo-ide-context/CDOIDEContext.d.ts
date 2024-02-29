import React from "react";
import { SaveFileFunction, CloseFileFunction, SetActiveFileFunction, NewFolderFunction, ToggleOpenFolderFunction, DeleteFolderFunction, OpenFileFunction, DeleteFileFunction, NewFileFunction, RenameFileFunction, RenameFolderFunction } from "./types";
import { ProjectType, ConfigType, SetProjectFunction, SetConfigFunction } from "../types";
type CDOIDEContextType = {
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
export declare const CDOIDEContext: React.Context<CDOIDEContextType | null>;
export declare const useCDOIDEContext: () => CDOIDEContextType;
type CDOIDEContextProviderType = {
    children: React.ReactNode;
    value: CDOIDEContextType;
};
export declare const CDOIDEContextProvider: ({ children, value, }: CDOIDEContextProviderType) => import("react/jsx-runtime").JSX.Element;
export {};
