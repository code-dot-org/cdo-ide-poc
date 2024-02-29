import { ProjectFileType, ProjectFolderType, ReducerAction } from "../types";
import { SaveFileFunction, NewFileFunction, RenameFileFunction, OpenFileFunction, CloseFileFunction, DeleteFileFunction, SetActiveFileFunction, NewFolderFunction, RenameFolderFunction, ToggleOpenFolderFunction, DeleteFolderFunction } from "./types";
export declare const getNextFileId: (files: ProjectFileType[]) => string;
export declare const getNextFolderId: (folders: ProjectFolderType[]) => string;
export declare const findSubFolders: (parentId: string, folders: ProjectFolderType[]) => string[];
export declare const findFiles: (folderId: string, files: ProjectFileType[], folders?: ProjectFolderType[]) => string[];
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
