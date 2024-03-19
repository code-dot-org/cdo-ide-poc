import React, { useState } from "react";
import "./styles/file-nav.css";

import { useCDOIDEContext } from "@cdoide/cdo-ide-context";
import { sortFilesByName } from "@cdoide/utils";
import {DndContext, DragEndEvent, KeyboardSensor, PointerSensor, closestCenter, useSensor, useSensors} from '@dnd-kit/core';
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { restrictToHorizontalAxis, restrictToParentElement } from "@dnd-kit/modifiers";
import SortableFileTab from "./SortableFileTab";

export const FileNav = () => {
  const {project} = useCDOIDEContext();
  const sortedFiles = sortFilesByName(project.files, { mustBeOpen: true });
  const [files, setFiles] = useState(sortedFiles);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: DragEndEvent) {
    const {active, over} = event;
    
    if (active.id !== over!.id) {
      setFiles((files) => {
        const oldIndex = files.indexOf(files.find(f => f.id === active.id)!);
        const newIndex = files.indexOf(files.find(f => f.id === over!.id)!);
        
        return arrayMove(files, oldIndex, newIndex);
      });
    }
  }

  return (
      <div className="files-nav-bar">
        <DndContext 
          onDragEnd={handleDragEnd}
          sensors={sensors}
          collisionDetection={closestCenter}
          modifiers={[restrictToParentElement, restrictToHorizontalAxis]}
        >
          <SortableContext items={files} strategy={horizontalListSortingStrategy}>
            {files.map((f) => (
              <SortableFileTab file={f} key={f.id} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
  );
};
