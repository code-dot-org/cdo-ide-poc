import React from "react";
import { ProjectFileType } from "@cdoide/types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useCDOIDEContext } from "@cdoide/cdo-ide-context";

interface SortableFileTabProps {
  file: ProjectFileType;
}

const SortableFileTab: React.FunctionComponent<SortableFileTabProps> = ({
  file,
}) => {
  const { closeFile, setActiveFile } = useCDOIDEContext();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: file.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <div className={`file-tab ${file.active ? "active" : ""}`} key={file.id}>
        <span onClick={() => setActiveFile(file.id)}>
          <i className="fa-solid fa-file" />
          &nbsp;
          {file.name}
        </span>
        <button
          type="button"
          className="inline-button"
          onClick={() => closeFile(file.id)}
        >
          <i className="fa-solid fa-x"></i>
        </button>
      </div>
    </div>
  );
};

export default SortableFileTab;
