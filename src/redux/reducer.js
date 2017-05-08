import { UPDATE_VOTE, SORT_NEWEST, SORT_POPULAR } from './actions';
// import { data } from '../mock-data';


// We now write reducers that take these actions and return a new state of our application.
export const PostsReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_VOTE:
      const newPostList = state.map((post) => {
        if (action.id === post.id) { post.votes++; }
        return post;
      });
      return newPostList;
    case SORT_NEWEST:
      let newestPosts = [...state];
      return newestPosts.sort((a, b) => b.id - a.id);
    case SORT_POPULAR:
      let popularPosts = [...state];
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
