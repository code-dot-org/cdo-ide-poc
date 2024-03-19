// TODO: move this to a more generic location
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableProps {
  id: string;
  children: React.ReactNode;
}

const Sortable: React.FunctionComponent<SortableProps> = ({id, children}) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
  <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
    {children}
  </div>
  );
}
export default Sortable;