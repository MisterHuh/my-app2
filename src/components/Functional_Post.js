import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

export const FunctionalPost = () => {

  const posts = [
    {
      id: 1,
      title: "title1",
      body: "body1"
    },
    {
      id: 2,
      title: "title2",
      body: "body2"
    },
    {
      id: 3,
      title: "title3",
      body: "body3"
    }
  ]

  const items = posts.map(post => (
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  ))

  console.log("posts is: ", posts);

  return (
    <div>
      <h1>Posts</h1>
      {items}
    </div>
  )
}

// function mapStateToProps (state) {
//   console.log("map state to propping");
//   return { posts: state.posts.items }
// }

// export default connect(mapStateToProps, { fetchPosts })(FunctionalPost);
