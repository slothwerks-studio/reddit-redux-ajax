import React, { Component } from 'react';

class Post extends Component {

  render() {
    const post = this.props.post;
        // encodeURIComponent makes a string safe to include in a URL since some
        // characters are not allowed in URLs or need to be modified.
        return (
            <div className="Post">
                <img src={post.data.thumbnail} className="postImage" alt="Post image" />
                <p className="postTitle">{post.data.title}</p>
            </div>
        );
  }
}

export default Post;