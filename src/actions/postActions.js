import { FETCH_POSTS, NEW_POSTS } from "./types";


/* original fetch call from Post.js */
/* see how the this.setState changes */
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(res => res.json())
//   .then(data => this.setState({ posts: data }));


/* before es6 magic */
// export function fetchPosts() {
//   return function(dispatch) {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then(res => res.json())
//       .then(posts => dispatch({
//         type:FETCH_POSTS,
//         payload: posts // the payload will be reduced in the postReducers
//       }));
//   }
// }

/* after es6 magic */
/* same thing as above, but in a cleanr way */
export const fetchPosts = () => dispatch => {
  console.log("fetching");
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(posts => dispatch({
      type: FETCH_POSTS,
      payload: posts // the payload will be reduced in the postReducers
    }));
}

export const createPost = (postData) => dispatch => {
  // console.log("fetching");
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post => dispatch({
      type: NEW_POSTS,  // will dispatch NEW_POSTS to reducer (switch)
      payload: postData // the payload will be reduced in the postReducers
    }))
}
