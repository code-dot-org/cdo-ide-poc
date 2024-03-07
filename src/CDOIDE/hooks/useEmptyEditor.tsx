import { useCDOIDEContext } from "../cdo-ide-context";
import { getEmptyEditor } from "../utils";
import { ConfigType } from "../types";
export const useEmptyEditor = () => {
  const { config } = useCDOIDEContext();
  return getEmptyEditor(config);
};
