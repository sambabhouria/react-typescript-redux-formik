import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { RouteComponentProps } from 'react-router';
import { Post } from '../../reducers/posts-reducer';
import { fetchPost } from '../../actions/posts-actions';
import { Link } from "react-router-dom";

interface PostShowProps extends RouteComponentProps<OwnPropsParams> {
    post: Post;
    fetchPost: (id: number) => void;
}

class PostShow extends Component<PostShowProps> {
    componentDidMount(): void {
        this.props.fetchPost(Number(this.props.match.params.id));
    }

    render() {
        if (!this.props.post) {
            return null;
        }
        return (

            <div className="card w-100">
                <div className="card-body">
                    <h5 className="card-title">{this.props.post.title}</h5>
                    <p className="card-text">{this.props.post.author}</p>

                    <div className="text-center"> 
                    <Link
                        to={"/react-redux-ts-crud"}
                        className="btn btn-primary"
                        style={{ width: "200px"}}
                        >
                        Show all posts
                    </Link>
                  </div>
                    
                </div>
            </div>

            // <div className="ui card">
            //     <div className="content">
            //         <div className="header">{this.props.post.title}</div>
            //         <div className="meta">{this.props.post.author}</div>
            //         <div className="description">
            //             <p>
            //                 Cute dogs come in a variety of shapes and sizes.
            //                 Some cute dogs are cute for their adorable faces,
            //                 others for their tiny stature, and even others for
            //                 their massive size.
            //             </p>
            //             <p>
            //                 Many people also have their own barometers for what
            //                 makes a cute dog.
            //             </p>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

interface OwnPropsParams {
    id: string;
}

function mapStateToProps(
    state: RootState,
    ownProps: RouteComponentProps<OwnPropsParams>
) {
    return {
        post: state.posts.items[Number(ownProps.match.params.id)]
    };
}

export default connect(
    mapStateToProps,
    { fetchPost }
)(PostShow);