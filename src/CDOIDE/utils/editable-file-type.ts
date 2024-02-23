export const editableFileType = (language: string) => {
  const availableLanguages = new Set(["html", "css", "js", "json"]);

  return availableLanguages.has(language);
};
