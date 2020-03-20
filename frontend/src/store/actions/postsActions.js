import axiosOrders from "../../axiosOrders";

export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

export const fetchPostsSuccess = posts => ({type: FETCH_POSTS_SUCCESS, posts});
export const fetchPostsFailure = error => ({type: FETCH_POSTS_FAILURE, error});

export const fetchPosts = () => {
  return async dispatch => {
    try{
      const response = await axiosOrders.get('/posts');

      dispatch(fetchPostsSuccess(response.data));
    }catch(error){
      dispatch(fetchPostsFailure(error))
    }
  };
};