import React, { useState } from "react";
import "./styles/file-nav.css";

import { useCDOIDEContext } from "@cdoide/cdo-ide-context";
import { sortFilesByName } from "@cdoide/utils";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import {
  restrictToHorizontalAxis,
  restrictToParentElement,
} from "@dnd-kit/modifiers";
import FileTab from "./FileTab";
import Sortable from "./Sortable";

export const FileNav = () => {
  const { project } = useCDOIDEContext();
  const sortedFiles = sortFilesByName(project.files, { mustBeOpen: true });
  // TODO: we need to update the file list in the context when the files change (e.g. when a file is closed or opened)
  // We also probably need to add a tab index to the file state so we can open in the same order
  // every time.
  const [files, setFiles] = useState(sortedFiles);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const [draggingFileId, setDraggingFileId] = useState<string | null>(null);

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;
    setDraggingFileId(null);

    if (active.id !== over!.id) {
      setFiles((files) => {
        const oldIndex = files.indexOf(files.find((f) => f.id === active.id)!);
        const newIndex = files.indexOf(files.find((f) => f.id === over!.id)!);

        return arrayMove(files, oldIndex, newIndex);
      });
    }
  }

  function handleDragStart(event: DragStartEvent) {
    setDraggingFileId(event.active.id as string);
  }

  return (
    <div className="files-nav-bar">
      <DndContext
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToParentElement, restrictToHorizontalAxis]}
      >
        <SortableContext items={files} strategy={horizontalListSortingStrategy}>
          {files.map((f) => (
            <Sortable id={f.id} key={f.id}>
              <FileTab file={f} />
            </Sortable>
          ))}
          <DragOverlay>
            {draggingFileId ? (
              <FileTab file={files.find((f) => f.id === draggingFileId)!} />
            ) : null}
          </DragOverlay>
        </SortableContext>
      </DndContext>
    </div>
  );
};
