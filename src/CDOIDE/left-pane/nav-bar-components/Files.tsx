import React from "react";
import {
  useCDOIDEContext,
  getNextFileId,
  getNextFolderId,
} from "../../cdo-ide-context";

import { ProjectType } from "../../types";
import { DEFAULT_FOLDER_ID } from "../../constants";

import "./styles/files.css";

type FoldersProps = {
  newFolderPrompt: (parentId?: string) => void;
  folders: ProjectType["folders"];
  parentId?: string;
  files: ProjectType["files"];
  newFilePrompt: (folderId?: string) => void;
  renameFilePrompt: (fileId: string) => void;
  renameFolderPrompt: (folderId: string) => void;
};

const FilesBrowser = ({
  parentId,
  folders,
  files,
  newFolderPrompt,
  newFilePrompt,
  renameFilePrompt,
  renameFolderPrompt,
}: FoldersProps) => {
  const {
    openFile,
    deleteFile,
    toggleOpenFolder,
    deleteFolder,
  } = useCDOIDEContext();

  return (
    <>
      {Object.values(folders)
        .filter((f) => f.parentId === parentId)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((f) => {
          const caret = (
            <i
              className={
                f.open ? "fa-solid fa-caret-down" : "fa-solid fa-caret-right"
              }
            />
          );

          return (
            <li key={f.id + f.open}>
              <span className="label">
                <span className="title">
                  <span
                    className="caret"
                    onClick={() => toggleOpenFolder(f.id)}
                  >
                    {caret}
                  </span>
                  <span>{f.name}</span>
                </span>

                <span className="button-bar">
                  <span onClick={() => renameFolderPrompt(f.id)}>
                    <i className="fa-solid fa-pencil" />
                  </span>
                  <span onClick={() => newFolderPrompt(f.id)}>
                    <i className="fa-solid fa-folder-plus" />
                  </span>
                  <span onClick={() => newFilePrompt(f.id)}>
                    <i className="fa-solid fa-plus" />
                  </span>
                  <span onClick={() => deleteFolder(f.id)}>
                    <i className="fa-solid fa-trash" />
                  </span>
                </span>
              </span>
              {f.open && (
                <ul>
                  <FilesBrowser
                    folders={folders}
                    newFolderPrompt={newFolderPrompt}
                    parentId={f.id}
                    files={files}
                    newFilePrompt={newFilePrompt}
                    renameFilePrompt={renameFilePrompt}
                    renameFolderPrompt={renameFolderPrompt}
                  />
                </ul>
              )}
            </li>
          );
        })}
      {Object.values(files)
        .filter((f) => f.folderId === parentId)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((f) => (
          <li key={f.id}>
            <span className="label">
              <span onClick={() => openFile(f.id)}>{f.name}</span>
              <span className="button-bar">
                <span onClick={() => renameFilePrompt(f.id)}>
                  <i className="fa-solid fa-pencil" />
                </span>
                <span onClick={() => deleteFile(f.id)}>
                  <i className="fa-solid fa-trash" />
                </span>
              </span>
            </span>
          </li>
        ))}
    </>
  );
};

export const Files = () => {
  const {
    project,
    newFile,
    renameFile,
    renameFolder,
    newFolder,
  } = useCDOIDEContext();

  const newFolderPrompt: FoldersProps["newFolderPrompt"] = (
    parentId = DEFAULT_FOLDER_ID
  ) => {
    const folderId = getNextFolderId(Object.values(project.folders));

    const folderName = window.prompt("Please name your new folder");
    if (!folderName) {
      return;
    }

    const existingFolder = Object.values(project.folders).find(
      (f) => f.name === folderName && f.parentId === parentId
    );
    if (existingFolder) {
      alert("Folder already exists");
      return;
    }

    newFolder({ parentId, folderName, folderId });
  };

  const newFilePrompt: FoldersProps["newFilePrompt"] = (
    folderId = DEFAULT_FOLDER_ID
  ) => {
    const fileName = window
      .prompt("Please name your new file")
      ?.replace(/[^\w.]+/g, "");
    if (!fileName) {
      return;
    }

    const existingFile = Object.values(project.files).find(
      (f) => f.name === fileName && f.folderId === folderId
    );
    if (existingFile) {
      alert("File already exists");
      return;
    }

    const [_, extension] = fileName.split(".");
    if (!extension) {
      window.alert("Files must have extensions");
      return;
    }

    const fileId = getNextFileId(Object.values(project.files));
    newFile({
      fileId,
      fileName,
      folderId,
    });
  };

  const renameFilePrompt: FoldersProps["renameFilePrompt"] = (fileId) => {
    const file = project.files[fileId];
    const newName = window.prompt("Rename file", file.name);
    if (newName === null || newName === file.name) {
      return;
    }

    const existingFile = Object.values(project.files).find(
      (f) => f.name === newName && f.folderId === file.folderId
    );
    if (existingFile) {
      alert("File already exists");
      return;
    }

    renameFile(fileId, newName);
  };

  const renameFolderPrompt: FoldersProps["renameFolderPrompt"] = (folderId) => {
    const folder = project.folders[folderId];
    const newName = window.prompt("Rename folder", folder.name);
    if (newName === null || newName === folder.name) {
      return;
    }

    const existingFolder = Object.values(project.folders).find(
      (f) => f.name === newName && f.parentId === folder.parentId
    );
    if (existingFolder) {
      alert("Folder already exists");
      return;
    }

    renameFolder(folder.id, newName);
  };

  return (
    <div>
      <div className="files-toolbar">
        <button type="button" onClick={() => newFolderPrompt()}>
          New Folder
        </button>
        <button type="button" onClick={() => newFilePrompt()}>
          New File
        </button>
      </div>
      <ul>
        <FilesBrowser
          parentId={DEFAULT_FOLDER_ID}
          folders={project.folders}
          newFolderPrompt={newFolderPrompt}
          files={project.files}
          newFilePrompt={newFilePrompt}
          renameFilePrompt={renameFilePrompt}
          renameFolderPrompt={renameFolderPrompt}
        />
      </ul>
    </div>
  );
};
