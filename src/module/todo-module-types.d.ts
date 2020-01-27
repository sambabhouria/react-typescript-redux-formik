declare module "my-todos-types-module" {
    import { StateType, ActionType } from "typesafe-actions";
    // 1 for reducer, 1 for action creators
    export type ReducerState = StateType<typeof import("../reducers/todos-reducer")>;
    export type RootAction = ActionType<typeof import("../actions/todos-actions")>;
  }
