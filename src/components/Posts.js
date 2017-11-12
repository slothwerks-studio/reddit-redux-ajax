import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {

  render() {
    return (
      <div className="Posts" id={this.props.listStyle}>
        {this.props.posts.map(post =>
            <Post key={post.url} post={post} />
        )}
      </div>
    );
  }
}

export default Posts;