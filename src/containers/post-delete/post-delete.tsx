
import React , { Fragment }  from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { RouteComponentProps } from 'react-router';
import { fetchPost, deletePost } from '../../actions/posts-actions';
 import { Modal } from "../../components/react-redux-typescript-crud/modal/modal";
import { Post } from '../../reducers/posts-reducer';
import { Link } from 'react-router-dom';
import history from '../../history';


interface PostDeleteProps extends RouteComponentProps<OwnPropsParams> {
    post: Post;
    fetchPost: (id: number) => void;
    deletePost: (post: number) => void;
}

class PostDelete extends React.Component<PostDeleteProps> {
    componentDidMount(): void {
        this.props.fetchPost(Number(this.props.match.params.id));
    }

    renderActions() {
        const { id } = this.props.match.params;
        return (
            <Fragment>

               <Link to="/react-redux-ts-crud" className="btn btn-secondary" style={{ marginRight: '10px'}}>
                    Cancel
                </Link>

                <button
                    onClick={() => this.props.deletePost(Number(id))}
                    className="btn btn-danger"
                >
                    Delete
                </button>
               
            </Fragment>
        );
    }

    renderContent() {
        if (!this.props.post) {
            return 'Are you sure?';
        }
        return (
            <div>
                Post with title <strong>"{this.props.post.title}"</strong> will
                be deleted.
                <p>Are you sure?</p>
            </div>
        );
    }

    render() {
        return (
            
            <Modal
                title="Delete Post"
                content={this.renderContent()}
                actions={this.renderActions()}
                onDismiss={() => history.push('/react-redux-ts-crud')}
            />
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
    { fetchPost, deletePost }
)(PostDelete);