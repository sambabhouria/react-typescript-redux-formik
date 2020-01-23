/**
 * Notice the file extension is .ts instead of .tsx. Since it won't contain any JSX
 * (it will be plain TypeScript) you don't have to use .tsx. It's still possible to use .tsx if you like
 * Now, when we specify that a component requires a Todo or an array of Todos, we'll get an error if we
 * forget to add a task or if we forgot to specify the status of our to-do.
 */
export interface Todo {
  task: string;
  finished: boolean;
}
