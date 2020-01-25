import React, { Component } from "react";
import {
  FormValues,
  PostForm
} from "../../components/react-redux-typescript-crud/post-form/post-form";
import { connect } from "react-redux";
import { addPost } from "../../actions/posts-actions";
import { Post } from "../../reducers/posts-reducer";

export type OwnPostsNewProps = {
  addPost: (post: Post) => void;
};

const initialValues: FormValues = {
  title: "",
  author: "Anonymous"
};

class PostsNew extends Component<OwnPostsNewProps> {
  render() {
    if (!this.props.addPost) {
      return null;
    }
    return (
      <PostForm initialValues={initialValues} onSubmit={this.props.addPost} />
    );
  }
}

export default connect(null, { addPost })(PostsNew);
