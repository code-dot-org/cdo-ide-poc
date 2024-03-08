import prettier from "prettier/standalone";
import htmlParser from "prettier/plugins/html";
import cssParser from "prettier/plugins/postcss";
import estreeParser from "prettier/plugins/estree";
import babelParser from "prettier/plugins/babel";

import { editableFileType } from "@cdoide/utils";

export const prettify = async (val: string, language: string) => {
  if (!editableFileType(language)) {
    return val;
  }

  // javscript is just special cases all the way down.
  const parser = language === "js" ? "babel" : language;

  const formatted = await prettier.format(val, {
    parser,
    plugins: [cssParser, htmlParser, estreeParser, babelParser],
    tabWidth: 2,
    htmlWhitespaceSensitivity: "ignore",
  });

  return formatted;
};
