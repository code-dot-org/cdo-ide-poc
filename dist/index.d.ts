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
    moveFile: MoveFileFunction;
    renameFolder: RenameFolderFunction;
};

declare type CDOIDEProps = {
    project: ProjectType;
    config: ConfigType;
    setProject: SetProjectFunction;
    setConfig: SetConfigFunction;
};

export declare type CloseFileFunction = (fileId: FileId) => void;

export declare type ConfigType = {
    showLeftNav?: boolean;
    showEditor?: boolean;
    showPreview?: boolean;
    showSideBar?: boolean;
    showRunBar?: boolean;
    showDebug?: boolean;
    activeLeftNav: string;
    sideBar: string[];
    instructions: string | undefined;
    leftNav: LeftNavElement[];
    EditorComponent?: EditorComponent;
    editableFileTypes?: string[];
    previewFileTypes?: string[];
    EmptyEditorComponent?: EmptyEditorComponent;
    blankEmptyEditor?: boolean;
    PreviewComponents?: {
        [key: string]: PreviewComponent;
    };
};

export declare type DeleteFileFunction = (fileId: FileId) => void;

export declare type DeleteFolderFunction = (folderId: FolderId) => void;

export declare const editableFileType: (language: string, editableFileTypesArray?: string[]) => boolean;

export declare type EditorComponent = () => JSX.Element;

export declare type EmptyEditorComponent = () => JSX.Element;

export declare type FileId = string;

export declare const findFiles: (folderId: string, files: ProjectFileType[], folders?: ProjectFolderType[]) => string[];

export declare const findFolder: (folderLineage: string[] | undefined, options: {
    folders: ProjectFolderType[];
    required?: boolean;
}) => string;

export declare const findSubFolders: (parentId: string, folders: ProjectFolderType[]) => string[];

export declare type FolderId = string;

export declare const getEmptyEditor: (config: ConfigType) => EmptyEditorComponent;

export declare const getEmptyProject: () => {
    files: {};
    folders: {};
};

export declare const getErrorMessage: (e: unknown) => string;

export declare const getNextFileId: (files: ProjectFileType[]) => string;

export declare const getNextFolderId: (folders: ProjectFolderType[]) => string;

export declare type LeftNavElement = {
    icon: string;
    component: string;
};

export declare type MoveFileFunction = (fileId: FileId, folderId: FolderId) => void;

export declare type NewFileFunction = (arg: {
    fileId: FileId;
    fileName: string;
    folderId?: FolderId;
    contents?: string;
}) => void;

export declare type NewFolderFunction = (arg: {
    folderId: FolderId;
    folderName: string;
    parentId?: FolderId;
}) => void;

export declare type OpenFileFunction = (fileId: FileId) => void;

export declare const prettify: (val: string, language: string) => Promise<string>;

export declare type PreviewComponent = (args: {
    file: ProjectFileType;
}) => JSX.Element;

export declare const previewFileType: (language: string, previewFileTypesArray?: string[]) => boolean;

export declare type ProjectFileType = {
    id: FileId;
    name: string;
    language: string;
    contents: string;
    open?: boolean;
    active?: boolean;
    folderId: string;
};

export declare type ProjectFolderType = {
    id: FolderId;
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

export declare type RenameFileFunction = (fileId: FileId, newName: string) => void;

export declare type RenameFolderFunction = (folderId: string, newName: string) => void;

export declare type ReplaceProjectFunction = (project: ProjectType) => void;

export declare type SaveFileFunction = (fileId: FileId, contents: string) => void;

export declare type SetActiveFileFunction = (fileId: FileId) => void;

export declare type SetConfigFunction = (project: ConfigType) => void;

export declare type SetProjectFunction = (project: ProjectType) => void;

export declare const sortFilesByName: (files: ProjectType["files"], options?: {
    mustBeOpen: boolean;
}) => ProjectFileType[];

export declare type ToggleOpenFolderFunction = (folderId: FolderId) => void;

export declare const useCDOIDEContext: () => CDOIDEContextType;

export declare const useProjectUtilities: (dispatch: React.Dispatch<ReducerAction>) => {
    replaceProject: ReplaceProjectFunction;
    newFile: NewFileFunction;
    renameFile: RenameFileFunction;
    saveFile: SaveFileFunction;
    openFile: OpenFileFunction;
    closeFile: CloseFileFunction;
    deleteFile: DeleteFileFunction;
    setActiveFile: SetActiveFileFunction;
    moveFile: MoveFileFunction;
    newFolder: NewFolderFunction;
    renameFolder: RenameFolderFunction;
    toggleOpenFolder: ToggleOpenFolderFunction;
    deleteFolder: DeleteFolderFunction;
};

export { }
}
