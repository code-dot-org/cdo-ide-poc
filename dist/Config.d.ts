import { ProjectType, ConfigType } from "./CDOIDE/types";
type ConfigProps = {
    config: ProjectType | ConfigType;
    setConfig: (name: string, config: ProjectType | ConfigType) => void;
    configName: string;
    cancelConfig: () => void;
};
export declare const Config: ({ config, setConfig, configName, cancelConfig, }: ConfigProps) => import("react/jsx-runtime").JSX.Element;
export {};
