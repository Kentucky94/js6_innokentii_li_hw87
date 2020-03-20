import axiosOrders from "../../axiosOrders";

export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const fetchCommentsSuccess = comments => ({type: FETCH_COMMENTS_SUCCESS, comments});
export const fetchCommentsFailure = error => ({type: FETCH_COMMENTS_FAILURE, error});

export const fetchComments = postId => {
  return async dispatch => {
    try{
      const response = await axiosOrders.get('/comments/' + postId);

      dispatch(fetchCommentsSuccess(response.data));
    }catch(error){
      dispatch(fetchCommentsFailure(error))
    }
  }
};