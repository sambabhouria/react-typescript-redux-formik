import * as React from "react";

interface TodoItemProps {
  item: string;
  idx: number;
  handleDelete: (idx: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = props => {
  return (
    <div className="item">
      <div className="content">
        <table className="table table-bordered">
          <tbody>
            <tr>
              <td className="table-Secondary">
                {" "}
                <span> {props.item}</span>{" "}
              </td>
              <td
                className="table-Secondary"
                style={{
                  textAlign: "right",
                  padding: 0,
                  width: "100px",
                  verticalAlign: "middle"
                }}
              >
                <span>
                  <button
                    onClick={() => props.handleDelete(props.idx)}
                    className="btn btn-danger"
                    style={{ width: "100px" }}
                  >
                    X
                  </button>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TodoItem;
