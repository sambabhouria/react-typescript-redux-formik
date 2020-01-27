import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { postsReducer, PostsState } from "./reducers/posts-reducer";
import { todoReducer, TodosState } from "./reducers/todos-reducer";
import { PostsAction } from "./actions/posts-actions";

export interface RootState {
  readonly posts: PostsState;
  readonly todo: TodosState;
}

const rootReducer = combineReducers<RootState>({
  posts: postsReducer,
  todo: todoReducer
});

export type RootActions = PostsAction; // | CommentsAction | etc.

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(reduxThunk as ThunkMiddleware<RootState, RootActions>)
  )
);
