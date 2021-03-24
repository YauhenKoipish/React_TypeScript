import React from "react";
import { ITodo } from "../interfaces";

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove: (id: number) => void;
};

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onRemove,
  onToggle,
}) => {
  if (todos.length === 0) {
    return <p className="center">No business yet!</p>;
  }

  const removeHandler = (e: React.MouseEvent, id: number) => {
    e.preventDefault();

    onRemove(id);
  };

  return (
    <ul>
      {todos.map(({ completed, title, id }) => {
        return (
          <li className={`todo ${completed && "completed"}`} key={id}>
            <label>
              <input
                type="checkbox"
                checked={completed}
                onChange={onToggle.bind(null, id)}
              />
              <span>{title}</span>
              <i
                className="material-icons red-text"
                onClick={(e) => removeHandler(e, id)}>
                delete
              </i>
            </label>
          </li>
        );
      })}
    </ul>
  );
};
