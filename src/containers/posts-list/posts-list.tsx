import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import PostsListItem from "../../components/react-redux-typescript-crud/posts-list-item";
import { fetchPosts } from "../../actions/posts-actions";
import { RootState } from "../../store";
import { Post } from "../../reducers/posts-reducer";

export interface PostsListProps {
  posts: Post[];
  fetchPosts: () => any;
}

class PostsList extends Component<PostsListProps> {
  componentDidMount(): void {
    this.props.fetchPosts();
  }

  renderPosts(): JSX.Element[] | null {
    const { posts } = this.props;
    if (!posts) {
      return null;
    }
    return posts.map((post: Post) => {
      return <PostsListItem post={post} key={post.id} />;
    });
  }

  render() {
    return <div className="ui items">{this.renderPosts()}</div>;
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    posts: _.values(state.posts.items)
  };
};

export default connect(mapStateToProps, { fetchPosts })(PostsList);
