const defaultEditableFileTypesArray = ["html", "css", "js", "json"];
export const editableFileType = (
  language: string,
  availableFileTypesArray = defaultEditableFileTypesArray
) => {
  const availableFileTypes = new Set(availableFileTypesArray);
  return availableFileTypes.has(language);
};
