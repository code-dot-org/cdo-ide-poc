import { useCDOIDEContext } from "@cdoide/cdo-ide-context";
import { getEmptyEditor } from "@cdoide/utils";
import { ConfigType } from "@cdoide/types";
export const useEmptyEditor = () => {
  const { config } = useCDOIDEContext();
  return getEmptyEditor(config);
};
