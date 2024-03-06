const defaultAvailableFileTypesArray = ["html", "css", "js", "json"];
export const editableFileType = (
  language: string,
  availableFileTypesArray = defaultAvailableFileTypesArray
) => {
  const availableFileTypes = new Set(availableFileTypesArray);
  return availableFileTypes.has(language);
};
