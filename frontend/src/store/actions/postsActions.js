import axiosOrders from "../../axiosOrders";
import {push} from 'connected-react-router';

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'CREATE_POST_FAILURE';

export const fetchPostsSuccess = posts => ({type: FETCH_POSTS_SUCCESS, posts});
export const fetchPostsFailure = error => ({type: FETCH_POSTS_FAILURE, error});
export const fetchPostSuccess = post => ({type: FETCH_POST_SUCCESS, post});
export const createPostSuccess = () => ({type: CREATE_POST_SUCCESS});
export const createPostFailure = error => ({type: CREATE_POST_FAILURE, error});

export const fetchPosts = () => {
  return async dispatch => {
    try{
      const response = await axiosOrders.get('/posts');
      response.data.reverse();

      dispatch(fetchPostsSuccess(response.data));
    }catch(error){
      dispatch(fetchPostsFailure(error))
    }
  };
};

export const fetchPost = postId => {
  return async dispatch => {
    try{
      const response = await axiosOrders.get('/posts/' + postId);

      dispatch(fetchPostSuccess(response.data));
    }catch(error){
      dispatch(fetchPostsFailure(error))
    }
  }
};

export const createPost = postData => {
  return async (dispatch, getState) => {
    const user = getState().users.user;

    try{
      await axiosOrders.post('/posts', postData, {headers: {'Authorization': 'Token ' + user.token}});

      dispatch(createPostSuccess());
      dispatch(push('/'))
    }catch(error){
      dispatch(createPostFailure(error));
    }
  }
};