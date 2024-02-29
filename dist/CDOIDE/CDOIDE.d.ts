import { ProjectType, ConfigType, SetProjectFunction, SetConfigFunction } from "./types";
import "./styles/cdo-ide.css";
type CDOIDEProps = {
    project: ProjectType;
    config: ConfigType;
    setProject: SetProjectFunction;
    setConfig: SetConfigFunction;
};
export declare const CDOIDE: ({ project, config, setProject, setConfig, }: CDOIDEProps) => import("react/jsx-runtime").JSX.Element;
export {};
