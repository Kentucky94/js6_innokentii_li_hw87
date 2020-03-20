import React, {Component} from 'react';
import {connect} from "react-redux";

import {fetchComments} from "../../store/actions/commentsActions";
import CommentBlock from "../../components/CommentBlock/CommentBlock";
import {fetchPost} from "../../store/actions/postsActions";

class FullPostPage extends Component {
  async componentDidMount() {
    await this.props.fetchPost(this.props.match.params.id);
    await this.props.fetchComments(this.props.match.params.id);
  }

  render() {
    const comments = this.props.comments.map(comment =>
      <CommentBlock
        key={comment._id}
        id={comment._id}
        author={comment.user.username}
        text={comment.commentText}
      />
    );

    return (
      <div className="FullPostPage">
        <h4>{this.props.currentPost.title}</h4>
        <h4>{this.props.currentPost.description}</h4>
        <h4>{this.props.currentPost.datetime}</h4>
        {comments}
      </div>
    );
  }
}

const mapSTateToProps = state => ({
  currentPost: state.posts.currentPost,
  comments: state.comments.comments,
  error: state.comments.error
});

const mapDispatchToProps = dispatch => ({
  fetchComments: postId => dispatch(fetchComments(postId)),
  fetchPost: postId => dispatch(fetchPost(postId))
});

export default connect(mapSTateToProps, mapDispatchToProps)(FullPostPage);