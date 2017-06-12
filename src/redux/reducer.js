import { UPDATE_VOTE, SORT_NEWEST, SORT_POPULAR } from './actions';
import { data } from '../mock-data';


// We now write reducers that take these actions and return a new state of our application.
export const PostsReducer = (state = data.posts, action) => {
  switch (action.type) {
    case UPDATE_VOTE:
      const newPostList = state.map((post) => {
        if (action.id === post.id) { post.votes = post.votes + 1; }
        return post;
      });
      return newPostList;
    case SORT_NEWEST:
      const newestPosts = [...state];
      return newestPosts.sort((a, b) => b.id - a.id);
    case SORT_POPULAR:
      const popularPosts = [...state];
      return popularPosts.sort((a, b) => b.votes - a.votes);
    default:
      return state;
  }
};

export const WeeksReducer = (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};
