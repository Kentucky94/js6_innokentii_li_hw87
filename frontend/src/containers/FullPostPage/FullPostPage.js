import React, {Component} from 'react';
import {connect} from "react-redux";
import moment from "moment";

import {fetchComments, postComment} from "../../store/actions/commentsActions";
import CommentBlock from "../../components/CommentBlock/CommentBlock";
import {fetchPost} from "../../store/actions/postsActions";
import {Button, Col, Form, FormGroup} from "reactstrap";
import FormElement from "../../components/UI/FormElement/FormElement";

class FullPostPage extends Component {
  state = {
    commentText: ''
  };

  async componentDidMount() {
    await this.props.fetchPost(this.props.match.params.id);
    await this.props.fetchComments(this.props.match.params.id);
  }

  inputChangeHandler = event => {
    this.setState({[event.target.name]: event.target.value})
  };

  onSubmitHandler = async event => {
    event.preventDefault();

    const commentData = {...this.state, post: this.props.match.params.id, user: this.props.user._id};

    await this.props.postComment(commentData);
    await this.props.fetchComments(this.props.match.params.id);
  };

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
        <h4><b>Title:</b> {this.props.currentPost.title}</h4>
        <h4><b>Description:</b> {this.props.currentPost.description}</h4>
        <h4><b>Was posted on:</b> {moment(this.props.currentPost.datetime).format('MMMM Do YYYY, h:mm:ss a')}</h4>
        <h3><b>Comments:</b></h3>
        {comments}


        <Form onSubmit={this.onSubmitHandler} style={{'display': !!this.props.user ? 'block' : 'none'}}>
          <h3><b>Add new comment</b></h3>
          <FormElement
            propertyName="commentText"
            type="text"
            value={this.state.commentText}
            onChange={this.inputChangeHandler}
            required
          />
          <FormGroup row>
            <Col sm={{offset: 2, size: 10}}>
              <Button type="submit" color="primary">
                Add comment
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPost: state.posts.currentPost,
  comments: state.comments.comments,
  error: state.comments.error,
  user: state.users.user
});

const mapDispatchToProps = dispatch => ({
  fetchComments: postId => dispatch(fetchComments(postId)),
  fetchPost: postId => dispatch(fetchPost(postId)),
  postComment: commentData => dispatch(postComment(commentData))
});

export default connect(mapStateToProps, mapDispatchToProps)(FullPostPage);