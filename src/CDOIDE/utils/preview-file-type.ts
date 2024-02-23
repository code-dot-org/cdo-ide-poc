export const previewFileType = (language: string) => {
  const availableLanguages = new Set(["html", "js", "json"]);

  return availableLanguages.has(language);
};
