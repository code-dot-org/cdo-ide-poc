import prettier from "prettier/standalone";
import htmlParser from "prettier/plugins/html";
import cssParser from "prettier/plugins/postcss";

export const prettify = async (val: string, language: string) => {
  if (language !== "html" && language !== "css") {
    return val;
  }

  const formatted = await prettier.format(val, {
    parser: language,
    plugins: [cssParser, htmlParser],
    tabWidth: 2,
    htmlWhitespaceSensitivity: "ignore",
  });

  return formatted;
};
