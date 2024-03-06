export type SaveFileFunction = (fileId: string, contents: string) => void;
export type CloseFileFunction = (fileId: string) => void;
export type SetActiveFileFunction = (fileId: string) => void;

export type EditorTheme = "light" | "dark";
