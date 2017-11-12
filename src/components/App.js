import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';
import { postListToggle } from '../actions';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Rich Man's Reddit</h1>
        <p onClick={this.props.postListToggle} className="postListToggle">Toggle Post List Style</p>
        { this.props.isLoading &&
            <h3>Loading...</h3>
        }
        <Posts posts={this.props.redditFeed} listStyle={this.props.postStyleToggle} />
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading,
        redditFeed: state.redditFeed,
        postStyleToggle: state.postStyleToggle
    };
}

const mapActionsToProps = { postListToggle };

export default connect(mapStateToProps, mapActionsToProps)(App);