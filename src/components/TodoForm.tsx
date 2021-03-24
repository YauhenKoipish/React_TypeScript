import React, { useRef } from "react";

interface TodoFormProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field mt2">
      <input
        type="text"
        id="title"
        ref={ref}
        placeholder=" Enter the name of task"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Enter the name of task
      </label>
    </div>
  );
};
