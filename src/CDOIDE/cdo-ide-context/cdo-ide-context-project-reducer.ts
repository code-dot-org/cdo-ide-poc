import { ProjectType, ReducerAction, PROJECT_REDUCER_ACTIONS } from "../types";
import { findFiles, findSubFolders } from "./utils";

type DefaultFilePayload = {
  fileId: string;
};

type DefaultFolderPayload = {
  folderId: string;
};

export const projectReducer = (project: ProjectType, action: ReducerAction) => {
  switch (action.type) {
    case PROJECT_REDUCER_ACTIONS.NEW_FILE: {
      const { fileId, fileName, folderId, contents = "" } = <
        DefaultFilePayload & {
          fileName: string;
          contents?: string;
          folderId: string;
        }
      >action.payload;

      const newProject = { ...project, files: { ...project.files } };

      /* eslint-disable-next-line */
      const [_, extension] = fileName.split(".");

      newProject.files[fileId] = {
        id: fileId,
        name: fileName,
        language: extension || "html",
        contents,

        folderId,
      };

      return newProject;
    }

    case PROJECT_REDUCER_ACTIONS.RENAME_FILE: {
      const { fileId, newName } = <DefaultFilePayload & { newName: string }>(
        action.payload
      );
      return {
        ...project,
        files: {
          ...project.files,
          [fileId]: { ...project.files[fileId], name: newName },
        },
      };
    }

    case PROJECT_REDUCER_ACTIONS.SAVE_FILE: {
      const { fileId, contents } = <DefaultFilePayload & { contents: string }>(
        action.payload
      );

      return {
        ...project,
        files: {
          ...project.files,
          [fileId]: { ...project.files[fileId], contents },
        },
      };
    }
    // OPEN_FILE does exactly the same thing as ACTIVATE_FILE, at least for now.
    case PROJECT_REDUCER_ACTIONS.OPEN_FILE:
    case PROJECT_REDUCER_ACTIONS.ACTIVATE_FILE: {
      const { fileId } = <DefaultFilePayload>action.payload;
      const activeFile = Object.values(project.files).filter(
        (f) => f.active
      )?.[0];

      // if this file is already active, then no change.
      if (activeFile?.id === fileId) {
        return project;
      }

      const newProject = {
        ...project,
        files: {
          ...project.files,
          [fileId]: { ...project.files[fileId], active: true, open: true },
        },
      };

      if (activeFile) {
        newProject.files[activeFile.id].active = false;
      }

      return newProject;
    }

    case PROJECT_REDUCER_ACTIONS.CLOSE_FILE: {
      const { fileId } = <DefaultFilePayload>action.payload;
      return {
        ...project,
        files: {
          ...project.files,
          [fileId]: { ...project.files[fileId], open: false, active: false },
        },
      };
    }

    case PROJECT_REDUCER_ACTIONS.DELETE_FILE: {
      const { fileId } = <DefaultFilePayload>action.payload;

      const newProject = {
        ...project,
        files: {
          ...project.files,
        },
      };

      delete newProject.files[fileId];

      return newProject;
    }

    case PROJECT_REDUCER_ACTIONS.NEW_FOLDER: {
      const { folderId, folderName, parentId } = <
        DefaultFolderPayload & {
          folderName: string;
          parentId: string;
        }
      >action.payload;

      const newProject = { ...project, folders: { ...project.folders } };

      newProject.folders[folderId] = {
        id: folderId,
        name: folderName,
        parentId,
      };

      return newProject;
    }

    case PROJECT_REDUCER_ACTIONS.TOGGLE_OPEN_FOLDER: {
      const { folderId } = <DefaultFolderPayload>action.payload;
      return {
        ...project,
        folders: {
          ...project.folders,
          [folderId]: {
            ...project.folders[folderId],
            open: !project.folders[folderId].open,
          },
        },
      };
    }
    case PROJECT_REDUCER_ACTIONS.DELETE_FOLDER: {
      const { folderId } = <DefaultFolderPayload>action.payload;
      const newProject = {
        ...project,
        folders: {
          ...project.folders,
        },
      };

      const subFolders = new Set(
        findSubFolders(folderId, Object.values(project.folders))
      );
      const files = new Set(
        findFiles(
          folderId,
          Object.values(project.files),
          Object.values(project.folders)
        )
      );

      // delete the folder
      delete newProject.folders[folderId];

      // delete all its child folders
      Object.values(newProject.folders)
        .filter((f) => subFolders.has(f.id))
        .forEach((f) => delete newProject.folders[f.id]);

      // and delete all files housed within this or any child folder
      if (files.size) {
        newProject.files = { ...newProject.files };
        Object.values(newProject.files)
          .filter((f) => files.has(f.id))
          .forEach((f) => delete newProject.files[f.id]);
      }

      return newProject;
    }

    case PROJECT_REDUCER_ACTIONS.RENAME_FOLDER: {
      const { folderId, newName } = <
        DefaultFolderPayload & { newName: string }
      >action.payload;
      return {
        ...project,
        folders: {
          ...project.folders,
          [folderId]: { ...project.folders[folderId], name: newName },
        },
      };
    }
    default:
      return project;
  }
};
