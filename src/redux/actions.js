// String Constants
// PostsReducer
export const UPDATE_VOTE = 'UPDATE_VOTE';
export const SORT_NEWEST = 'SORT_NEWEST';
export const SORT_POPULAR = 'SORT_POPULAR';
// WeeksReducer
export const GET_WEEK = 'GET_WEEK';



// Action Creators are functions that return an action
export const updateVote = id => ({ type: UPDATE_VOTE, id });
export const sortNewest = () => ({ type: SORT_NEWEST });
export const sortPopular = () => ({ type: SORT_POPULAR });


