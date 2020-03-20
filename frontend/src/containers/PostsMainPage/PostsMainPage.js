import React, {Component} from 'react';
import {connect} from "react-redux";

import {fetchPosts} from "../../store/actions/postsActions";
import './PostsMainPage.css';
import PostBlock from "../../components/PostBlock/PostBlock";

class PostsMainPage extends Component {
  async componentDidMount() {
    await this.props.fetchPosts();
  }

  render() {
    const posts = this.props.posts.map(post =>
      <PostBlock
        key={post._id}
        id={post._id}
        title={post.title}
        image={post.image}
        datetime={post.datetime}
        author={post.user.username}
      />
    );

    return (
      <div className="PostsMainPage">
        {posts}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.posts,
  error: state.posts.error,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsMainPage);