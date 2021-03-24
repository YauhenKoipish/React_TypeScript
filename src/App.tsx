import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { TodoForm } from "./components/TodoForm";

const App: React.FC = () => {
  // const [todoList, setTodoList] = useState();

  return (
    <>
      <Navbar />
      <div className="container">
        <TodoForm />
      </div>
    </>
  );
};

export default App;
