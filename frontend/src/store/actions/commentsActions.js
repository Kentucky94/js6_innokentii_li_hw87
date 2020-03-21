import axiosOrders from "../../axiosOrders";

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';
export const POST_COMMENT_SUCCESS = 'POST_COMMENT_SUCCESS';
export const POST_COMMENT_FAILURE = 'POST_COMMENT_FAILURE';

export const fetchCommentsSuccess = comments => ({type: FETCH_COMMENTS_SUCCESS, comments});
export const fetchCommentsFailure = error => ({type: FETCH_COMMENTS_FAILURE, error});
export const postCommentSuccess = () => ({type: POST_COMMENT_SUCCESS});
export const postCommentFailure = error => ({type: POST_COMMENT_FAILURE, error});

export const fetchComments = postId => {
  return async dispatch => {
    try{
      const response = await axiosOrders.get('/comments/' + postId);
      response.data.reverse();

      dispatch(fetchCommentsSuccess(response.data));
    }catch(error){
      dispatch(fetchCommentsFailure(error))
    }
  }
};

export const postComment = commentData => {
  return async (dispatch, getState) => {
    try{
      const user = getState().users.user;

      await axiosOrders.post('/comments', commentData, {headers: {'Authorization': 'Token ' + user.token}})

      dispatch(postCommentSuccess());
    }catch(error){
      dispatch(postCommentFailure(error));
    }
  }
};