import {FETCH_POST_SUCCESS, FETCH_POSTS_FAILURE, FETCH_POSTS_SUCCESS} from "../actions/postsActions";

const initialState = {
  posts: [],
  currentPost: {},
  error: null,
};

const postsReducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_POSTS_SUCCESS:
      return {...state, posts: action.posts, error: null};
    case FETCH_POSTS_FAILURE:
      return {...state, error: action.error};
    case FETCH_POST_SUCCESS:
      return {...state, currentPost: action.post, error: null};
    default:
      return state;
  }
};

export default postsReducer;