import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

const FunctionalPost = (postItems) => {

  // const items = postItems.map(post => (
  //   <div key={post.id}>
  //     <h3>{post.title}</h3>
  //     <p>{post.body}</p>
  //   </div>
  // ))

  return (
    <div>
      <h1>Posts</h1>
      {/* {items} */}
    </div>
  )
}

const mapStateToProps = (state) => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(FunctionalPost);