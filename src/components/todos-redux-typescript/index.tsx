import React, { useState, FormEvent, ChangeEvent } from "react";
import TodoList from "./todo-list";
import TodoForm from "./ todo-form";

import {TodoReduxTypeScript}  from  "./todo-redux-typescript-index";

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
        <div id="Table of Contents">
          {/* <span>In this frist tutorial we will discuss about</span>
          <ul>
            <li>Creating your first interface</li>
            <li>A to-do list, you know, to render to-do's</li>
            <li>A to-do component, this will represent one to-do</li>
            <li>
              A form to create a new to-do(A submit button,An input to write our
              to-do in )
            </li>
          </ul> */}
        </div>

        <div id="Exemple Here">
          <TodoReduxTypeScript />
          {/* <TodoList todos={todos} />
          <TodoForm
            onSubmit={handleSubmit}
            onInputChange={handleChange}
            inputValue={todoValue}
          /> */}
        </div>
      </Tabs>
    </div>
  );
};

export default TodoAppEntryPoint;
