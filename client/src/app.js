import "./App.css";

import { InputTodo } from "./components/InputTodo";
import { ListTodos } from "./components/ListTodo";

export const App = () => {
  return (
    <>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </>
  );
};
