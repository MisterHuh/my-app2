// evaluate any actions that are committed
// such as fetching our post
// and creating a new post

import { FETCH_POSTS, NEW_POSTS } from "../actions/types";

const initialState = {
  items: [], // representing the POST from our action (where the FETCH request will go)
  item: {} // representing the single post that we add. the response will simply go here
}

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
}
