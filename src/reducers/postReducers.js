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
      // console.log("reducer");
      return {
        ...state,
        items: action.payload
      }
    case NEW_POSTS:             // for this example, since we CANNOT add to JSONPlaceholder
		      return {              // and re-fetch the new array with 101th entry included
		        ...state,           // we'll simply be returning the new item
        item: action.payload    // and set to this.state.post.item
      }
    default:
      return state;
  }
}
