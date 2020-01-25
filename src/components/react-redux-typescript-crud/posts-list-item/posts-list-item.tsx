import React from "react";
import { Post } from "../../../reducers/posts-reducer";
import { Link } from "react-router-dom";
interface PostListItemProps {
  post: Post;
}

const PostsListItem = ({ post }: PostListItemProps) => (
  <div className="item">
    <div className="content">
      <table className="table table-bordered">
      <tbody>
        <tr>
          <td className="table-Secondary">
            <div className="meta">
              <span>Description</span>
            </div>
          </td>
          <td className="table-Secondary">
            <Link to={`/posts/${post.id}`} className="header">
              {post.title}
            </Link>
          </td>

          <td className="table-Secondary">
            <div className="extra">Author: {post.author}</div>
          </td>
          <td className="table-Secondary" style={{textAlign: "right"}}>
            <Link
              to={"/posts/edit/" + post.id}
              className="btn btn-primary"
              style={{  width: "100px" }}
            >
              Edit
            </Link>
          </td>
          <td className="table-Secondary" style={{textAlign: "right"}}>
            <Link
              to={"/posts/delete/" + post.id}
              className="btn btn-danger"
              style={{ width: "100px" }}
            >
              Delete
            </Link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
);

export default PostsListItem;
