/// <reference path="../../module/todo-module-types.d.ts"/>
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { actionTypes } from "../../actions/todos-actions";
import { RootState } from "../../store";
import TodoItem from "../../components/todos-redux-typescript/todo-redux-typescript-item";
import * as MyTypes from "my-todos-types-module";

interface TodoContainerState {
  todoInput: string;
}

interface TodoContainerProps {
  count: number;
  todoList: string[];
  addToDo: (item: string) => object;
  deleteToDo: (idx: number) => object;
}

class TodoReduxTypeScriptContainer extends React.Component<
  TodoContainerProps,
  TodoContainerState
> {
  constructor(props: TodoContainerProps) {
    super(props);
    this.state = {
      todoInput: ""
    };
  }

  /**
   * onKey(event: any) { // without type info
    this.values += event.target.value + ' | ';
  }
  onKey(event: KeyboardEvent) { // with type info
    this.values += (event.target as HTMLInputElement).value + ' | ';
  }
  onUpdatingServerName(event: React.ChangeEvent<HTMLInputElement>) {
  console.log(event);
  this.newserverName = event.target.value;
}

   */
  handleTextChange = (event: any) => {
    this.setState({
      // todoInput: event.target.value
      todoInput: event.target.value
    });
  };

  handleButtonClick = () => {
    this.props.addToDo(this.state.todoInput);
    this.setState({
      todoInput: ""
    });
  };

  handleDeleteButtonClick = (idx: number) => {
    console.log("deleting", idx);
    this.props.deleteToDo(idx);
  };

  render() {
    let todoJSX: JSX.Element[] | JSX.Element;

    if (!this.props.todoList.length) {
      todoJSX = <p>No to do</p>;
    } else {
      todoJSX = this.props.todoList.map((item, idx) => {
        return (
          <TodoItem
            item={item}
            key={idx}
            idx={idx}
            handleDelete={this.handleDeleteButtonClick}
          />
        );
      });
    }

    return (
      <div>
        {todoJSX}
        <input
          onChange={this.handleTextChange}
          placeholder={"New To Do Here"}
          value={this.state.todoInput}
        />
        <button onClick={this.handleButtonClick}>Add To Do</button>
      </div>
    );
  }
}

const MapStateToProps = (sotre: RootState) => {
  return {
    count: sotre.todo.count,
    todoList: sotre.todo.list
  };
};

const MapDispatchToProps = (dispatch: Dispatch<MyTypes.RootAction>) => ({
  addToDo: (item: string) => dispatch({ type: actionTypes.ADD, payload: item }),
  deleteToDo: (idx: number) =>
    dispatch({ type: actionTypes.DELETE, payload: idx })
});

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(TodoReduxTypeScriptContainer);
