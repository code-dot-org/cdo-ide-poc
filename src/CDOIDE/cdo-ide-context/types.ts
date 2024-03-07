import { ProjectType } from "@cdoide/types";
export type ReplaceProjectFunction = (project: ProjectType) => void;

export type SaveFileFunction = (fileId: string, contents: string) => void;
export type CloseFileFunction = (fileId: string) => void;
export type SetActiveFileFunction = (fileId: string) => void;

export type NewFolderFunction = (arg: {
  folderId: string;
  folderName: string;
  parentId?: string;
}) => void;
export type ToggleOpenFolderFunction = (folderId: string) => void;
export type DeleteFolderFunction = (folderId: string) => void;
export type OpenFileFunction = (fileId: string) => void;
export type DeleteFileFunction = (fileId: string) => void;
export type NewFileFunction = (arg: {
  fileId: string;
  fileName: string;
  folderId?: string;
  contents?: string;
}) => void;
export type RenameFileFunction = (fileId: string, newName: string) => void;
export type RenameFolderFunction = (folderId: string, newName: string) => void;
