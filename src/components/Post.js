import React, { Component } from 'react';

class Post extends Component {

  render() {
    const post = this.props.post;
        // encodeURIComponent makes a string safe to include in a URL since some
        // characters are not allowed in URLs or need to be modified.
        return (
          <a className="Post" href={"https://www.reddit.com" + post.data.permalink} target="_blank">
            <img src={post.data.thumbnail} className="postImage" alt="Post image" />
            <span className="postTitle">{post.data.title}</span>
          </a>
        );
  }
}

export default Post;