const defaultAvailableFileTypesArray = ["html", "js", "json"];
export const previewFileType = (
  language: string,
  availableFileTypesArray = defaultAvailableFileTypesArray
) => {
  const availableFileTypes = new Set(availableFileTypesArray);
  return availableFileTypes.has(language);
};
