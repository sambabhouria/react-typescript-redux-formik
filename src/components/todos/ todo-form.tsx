import React, { HTMLProps, ChangeEvent } from "react";

interface Props extends HTMLProps<HTMLFormElement> {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}

const TodoForm = ({ onInputChange, inputValue, ...props }: Props) => {
  return (
    <form {...props} style={{ marginTop: "10px" }}>
      <input
        className="form-control"
        placeholder="What would you like to get done?"
        onChange={onInputChange}
        value={inputValue}
      />
      <button className="btn btn-primary" style={{ marginTop: "5px" }}>
        Create
      </button>
    </form>
  );
};

export default TodoForm;
