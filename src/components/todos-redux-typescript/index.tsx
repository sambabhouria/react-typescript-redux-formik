import React, { useState, FormEvent, ChangeEvent } from "react";
import TodoList from "./todo-list";
import TodoForm from "./ todo-form";

import { TodoReduxTypeScript } from "./todo-redux-typescript-index";

import { Todo } from "../../interfaces/todos/todo";

import Tabs from "../tabs/tabs";

const TodoAppEntryPoint = () => {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [todoValue, setTodoValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTodos(previousTodos => [
      ...previousTodos,
      {
        task: todoValue,
        finished: false
      }
    ]);

    setTodoValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.currentTarget.value);
  };

  return (
    <div>
      <Tabs>
        <div id="React-Redux-TypeScript-Todo">
          <TodoReduxTypeScript />
        </div>

        <div id="Discussions in this tutorial">
          <span>React-Redux with TypeScript</span> <br />
          <span>
            typeScript is a typed superset of JavaScript. It has become popular
            recently in applications due to the benefits it can bring.
          </span>
          <br />
          <span style={{ color: "red" }}>What are we gonna build?</span>
          <br />
          <span>
            We’ll build the infamous to-do list application with
            typescript-react-redux
          </span>
          <br />
          <span> The features that this application will support are:</span>
          <br />
          <ul>
            <li>1.Add a new item to a list.</li>
            <li>2.Remove an item from the list.</li>
          </ul>
        </div>
      </Tabs>
    </div>
  );
};

export default TodoAppEntryPoint;
