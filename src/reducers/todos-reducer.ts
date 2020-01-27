/// <reference path="../module/todo-module-types.d.ts"/>
import * as MyTypes from "my-todos-types-module";
//import * as URL from "url";
import { actionTypes } from "../actions/todos-actions";
import { Reducer } from "redux";

export interface TodosState {
  count: number;
  list: string[];
}

export const initialState: TodosState = {
  count: 2,
  list: ["Do the laundry", "Do the dishes"]
};


export const todoReducer : Reducer<TodosState, MyTypes.RootAction> = (
   state = initialState, 
   action
  ) => {
  switch (action.type) {
    case actionTypes.ADD: {
      return {
        ...state,
        count: state.count + 1,
        list: [...state.list, action.payload]
      };
    }
    case actionTypes.DELETE: {
      const oldList = [...state.list];
      oldList.splice(action.payload, 1);
      const newList = oldList;

      return {
        ...state,
        count: state.count - 1,
        list: newList
      };
    }
    default:
      return state;
  }
};