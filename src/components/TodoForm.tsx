import React, { useState } from "react";

export const TodoForm: React.FC = () => {
  const [data, setData] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const keyPressHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      console.log("data :>> ", data);
      setData("");
    }
  };

  return (
    <div className="input-field mt2">
      <input
        onChange={changeHandler}
        type="text"
        id="title"
        placeholder=" Enter the name of task"
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        Enter the name of task
      </label>
    </div>
  );
};
