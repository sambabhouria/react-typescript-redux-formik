import React from "react";
import { Post } from "../../../reducers/posts-reducer";
import { Link } from "react-router-dom";
import meatingLogo from "../../../img/img1.jpg";
interface PostListItemProps {
  post: Post;
}

const PostsListItem = ({ post }: PostListItemProps) => (
  <div className="item">
    <div className="image">
      <img src={meatingLogo} alt="none" />
    </div>
    <div className="content">
      <Link to={`/posts/${post.id}`} className="header">
        {post.title}
      </Link>
      <div className="meta">
        <span>Description</span>
      </div>
      <div className="description">
        <p />
      </div>
      <div className="extra">Author: {post.author}</div>
      <div>
        <button
          style={{ marginRight: "10px", width: "100px" }}
          type="button"
          className="btn btn-primary"
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger"
          style={{ width: "100px" }}
        >
          Delete
        </button>
        {/* <Link to={"/posts/edit/" + post.id} className="ui green basic button">
          Edit
        </Link>
        <Link to={"/posts/delete/" + post.id} className="ui red basic button">
          Delete
        </Link> */}
      </div>
    </div>
  </div>
);

export default PostsListItem;
