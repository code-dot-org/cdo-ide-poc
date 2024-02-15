import { useCDOIDEContext } from "../../CDOIDEContext";

export const Instructions = () => {
  const {
    config: { instructions },
  } = useCDOIDEContext();
  return <div>{instructions}</div>;
};
