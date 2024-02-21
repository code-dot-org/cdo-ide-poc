import React from "react";
import { useCDOIDEContext } from "../../CDOIDEContext";

import { ProjectType } from "../../types";

import "./styles/files.css";

type FoldersProps = {
  newFolder: (parentId?: string) => void;
  openFolder: (folderId: string) => void;
  deleteFolder: (folderId: string) => void;
  folders: ProjectType["folders"];
  parentId?: string;
  files: ProjectType["files"];
  openFile: (fileId: string) => void;
  deleteFile: (fileId: string) => void;
  newFile: (folderId?: string) => void;
  renameFile: (fileId: string) => void;
  renameFolder: (folderId: string) => void;
};

type Obj = {
  name: string;
  foo: string;
};

const Folders = ({
  newFolder,
  openFolder,
  deleteFolder,
  folders,
  parentId,
  files,
  openFile,
  deleteFile,
  newFile,
  renameFile,
  renameFolder,
}: FoldersProps) => {
  const L: Record<string, Obj> = {
    X: { name: "1", foo: "f2" },
    Y: { name: "2", foo: "f3" },
    Z: { name: "3", foo: "f4" },
  };

  Object.values(L).filter((l) => l.name === "able");

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
                  <span className="caret" onClick={() => openFolder(f.id)}>
                    {caret}
                  </span>
                  <span>{f.name}</span>
                </span>

                <span className="button-bar">
                  <span onClick={() => renameFolder(f.id)}>
                    <i className="fa-solid fa-pencil" />
                  </span>
                  <span onClick={() => newFolder(f.id)}>
                    <i className="fa-solid fa-folder-plus" />
                  </span>
                  <span onClick={() => newFile(f.id)}>
                    <i className="fa-solid fa-plus" />
                  </span>
                  <span onClick={() => deleteFolder(f.id)}>
                    <i className="fa-solid fa-trash" />
                  </span>
                </span>
              </span>
              {f.open && (
                <ul>
                  <Folders
                    folders={folders}
                    newFolder={newFolder}
                    openFolder={openFolder}
                    deleteFolder={deleteFolder}
                    parentId={f.id}
                    files={files}
                    openFile={openFile}
                    deleteFile={deleteFile}
                    newFile={newFile}
                    renameFile={renameFile}
                    renameFolder={renameFolder}
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
                <span onClick={() => renameFile(f.id)}>
                  <i className="fa-solid fa-pencil" />
                </span>
                <span onClick={() => deleteFile(f.name)}>
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
  const { project, setProject } = useCDOIDEContext();

  const newFolder: FoldersProps["newFolder"] = (parentId = "0") => {
    const newProject = { ...project, folders: { ...project.folders } };

    const nextFolderId = String(
      Math.max(...Object.keys(project.folders).map(Number)) + 1
    );

    const newFolderName = window.prompt("Please name your new folder");
    if (!newFolderName) {
      return;
    }

    const existingFolder = Object.values(project.folders).find(
      (f) => f.name === newFolderName && f.parentId === parentId
    );
    if (existingFolder) {
      alert("Folder already exists");
      return;
    }

    newProject.folders[nextFolderId] = {
      name: newFolderName,
      id: nextFolderId,
      parentId,
    };

    setProject(newProject);
  };

  const newFile: FoldersProps["newFile"] = (folderId = "0") => {
    const newProject = { ...project, files: { ...project.files } };

    const nextFileId = String(
      Math.max(...Object.keys(project.files).map(Number)) + 1
    );
    console.log("NFI : ", nextFileId);

    Object.values(newProject.files).forEach((f) => {
      if (f.active) {
        newProject.files[f.id] = { ...f, active: false };
      }
    });

    const newFileName = window.prompt("Please name your new file");
    if (!newFileName) {
      return;
    }

    const existingFile = Object.values(project.files).find(
      (f) => f.name === newFileName && f.folderId === folderId
    );
    if (existingFile) {
      alert("File already exists");
      return;
    }

    const [_, extension] = newFileName.split(".");

    newProject.files[nextFileId] = {
      id: nextFileId,
      name: newFileName,
      language: extension || "html",
      contents: `Add your changes to ${newFileName}`,
      open: true,
      active: true,
      folderId,
    };
    console.log("NP IS : ", newProject, project);
    setProject(newProject);
  };

  const openFile: FoldersProps["openFile"] = (fileId) => {
    const activeFile = Object.values(project.files).filter(
      (f) => f.active
    )?.[0];

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

    if (activeFile?.id !== fileId) {
      setProject(newProject);
    }
  };

  const renameFile: FoldersProps["renameFile"] = (fileId) => {
    const file = project.files[fileId];
    const newName = window.prompt("Rename file", file.name);
    if (newName === null || newName === file.name) {
      return;
    }

    const newProject = {
      ...project,
      files: {
        ...project.files,
        [file.id]: { ...project.files[file.id], name: newName },
      },
    };

    setProject(newProject);
  };

  const renameFolder: FoldersProps["renameFolder"] = (folderId) => {
    const folder = project.folders[folderId];
    const newName = window.prompt("Rename folder", folder.name);
    if (newName === null || newName === folder.name) {
      return;
    }

    const newProject = {
      ...project,
      folders: {
        ...project.folders,
        [folder.id]: { ...project.folders[folder.id], name: newName },
      },
    };

    setProject(newProject);
  };

  const deleteFile: FoldersProps["deleteFile"] = (fileId) => {
    const activeFile = Object.values(project.files).filter(
      (f) => f.active
    )?.[0];

    const newProject = {
      ...project,
      files: {
        ...project.files,
      },
    };

    delete newProject.files[fileId];

    if (activeFile && activeFile.id !== fileId) {
      newProject.files[activeFile.id].active = false;
    }

    setProject(newProject);
  };

  const deleteFolder: FoldersProps["deleteFolder"] = (folderId) => {
    const newProject = {
      ...project,
      folders: {
        ...project.folders,
      },
    };

    // delete the folder
    delete newProject.folders[folderId];
    // and recursively delete any of its children. Dammit.
    // this only goes a single level deep atm. This'll be fixed as this component
    // is rewritten and shorn up.
    Object.values(newProject.folders)
      .filter((f) => f.parentId === folderId)
      .forEach((f) => delete newProject.folders[f.id]);

    setProject(newProject);
  };

  const openFolder: FoldersProps["openFolder"] = (folderId) => {
    const newProject = {
      ...project,
      folders: {
        ...project.folders,
      },
    };

    // toggle its open state

    newProject.folders[folderId].open = !Boolean(
      newProject.folders[folderId].open
    );

    setProject(newProject);
  };

  return (
    <div>
      <div className="files-toolbar">
        <button type="button" onClick={() => newFolder()}>
          New Folder
        </button>
        <button type="button" onClick={() => newFile()}>
          New File
        </button>
      </div>
      <ul>
        <Folders
          parentId={"0"}
          folders={project.folders}
          newFolder={newFolder}
          openFolder={openFolder}
          deleteFolder={deleteFolder}
          files={project.files}
          openFile={openFile}
          deleteFile={deleteFile}
          newFile={newFile}
          renameFile={renameFile}
          renameFolder={renameFolder}
        />
      </ul>
    </div>
  );
};
