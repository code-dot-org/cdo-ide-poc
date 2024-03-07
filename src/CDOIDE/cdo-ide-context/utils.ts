import { useMemo } from "react";
import {
  ProjectType,
  ProjectFileType,
  ProjectFolderType,
  ReducerAction,
  PROJECT_REDUCER_ACTIONS,
} from "@cdoide/types";
import {
  ReplaceProjectFunction,
  SaveFileFunction,
  NewFileFunction,
  RenameFileFunction,
  OpenFileFunction,
  CloseFileFunction,
  DeleteFileFunction,
  SetActiveFileFunction,
  NewFolderFunction,
  RenameFolderFunction,
  ToggleOpenFolderFunction,
  DeleteFolderFunction,
} from "./types";

import { DEFAULT_FOLDER_ID } from "../constants";

const DEFAULT_NEW_FILE_CONTENTS = "Add your changes to ${fileName}";

export const getNextFileId = (files: ProjectFileType[]) =>
  String(Math.max(...files.map((f) => Number(f.id))) + 1);

export const getNextFolderId = (folders: ProjectFolderType[]) =>
  String(Math.max(...folders.map((f) => Number(f.id))) + 1);

export const findSubFolders = (
  parentId: string,
  folders: ProjectFolderType[]
) =>
  folders.reduce((bucket, f: ProjectFolderType) => {
    if (f.parentId === parentId) {
      bucket.push(f.id, ...findSubFolders(f.id, folders));
    }
    return bucket;
  }, <string[]>[]);

export const findFiles = (
  folderId: string,
  files: ProjectFileType[],
  folders?: ProjectFolderType[]
) => {
  const folderIds = new Set(
    folders ? [folderId, ...findSubFolders(folderId, folders)] : [folderId]
  );
  return files.reduce((bucket, f: ProjectFileType) => {
    if (folderIds.has(f.folderId)) {
      bucket.push(f.id);
    }
    return bucket;
  }, <string[]>[]);
};

export const useProjectUtilities = (
  dispatch: React.Dispatch<ReducerAction>
) => {
  return useMemo(() => {
    const utils = {
      replaceProject: <ReplaceProjectFunction>((project: ProjectType) => {
        dispatch({
          type: PROJECT_REDUCER_ACTIONS.REPLACE_PROJECT,
          payload: { project },
        });
      }),
      newFile: <NewFileFunction>(({
        fileId,
        fileName,
        folderId = DEFAULT_FOLDER_ID,
        contents = DEFAULT_NEW_FILE_CONTENTS,
      }) => {
        dispatch({
          type: PROJECT_REDUCER_ACTIONS.NEW_FILE,
          payload: {
            fileId,
            fileName,
            folderId,
            contents: contents.replace(/\${fileName}/g, fileName),
          },
        });
        utils.setActiveFile(fileId);
      }),
      renameFile: <RenameFileFunction>((fileId, newName) => {
        dispatch({
          type: PROJECT_REDUCER_ACTIONS.RENAME_FILE,
          payload: { fileId, newName },
        });
      }),
      saveFile: <SaveFileFunction>((fileId, contents) => {
        dispatch({
          type: PROJECT_REDUCER_ACTIONS.SAVE_FILE,
          payload: { fileId, contents },
        });
      }),
      openFile: <OpenFileFunction>((fileId) => {
        dispatch({
          type: PROJECT_REDUCER_ACTIONS.OPEN_FILE,
          payload: { fileId },
        });
      }),
      closeFile: <CloseFileFunction>((fileId) => {
        dispatch({
          type: PROJECT_REDUCER_ACTIONS.CLOSE_FILE,
          payload: { fileId },
        });
      }),
      deleteFile: <DeleteFileFunction>((fileId) => {
        dispatch({
          type: PROJECT_REDUCER_ACTIONS.DELETE_FILE,
          payload: { fileId },
        });
      }),
      setActiveFile: <SetActiveFileFunction>((fileId) => {
        dispatch({
          type: PROJECT_REDUCER_ACTIONS.ACTIVATE_FILE,
          payload: { fileId },
        });
      }),

      newFolder: <NewFolderFunction>(({
        folderId,
        folderName,
        parentId = DEFAULT_FOLDER_ID,
      }) => {
        dispatch({
          type: PROJECT_REDUCER_ACTIONS.NEW_FOLDER,
          payload: { folderId, folderName, parentId },
        });
      }),
      renameFolder: <RenameFolderFunction>((folderId, newName) => {
        dispatch({
          type: PROJECT_REDUCER_ACTIONS.RENAME_FOLDER,
          payload: { folderId, newName },
        });
      }),
      toggleOpenFolder: <ToggleOpenFolderFunction>((folderId) => {
        dispatch({
          type: PROJECT_REDUCER_ACTIONS.TOGGLE_OPEN_FOLDER,
          payload: { folderId },
        });
      }),
      deleteFolder: <DeleteFolderFunction>((folderId) => {
        dispatch({
          type: PROJECT_REDUCER_ACTIONS.DELETE_FOLDER,
          payload: { folderId },
        });
      }),
    };
    return utils;
  }, [dispatch]);
};
