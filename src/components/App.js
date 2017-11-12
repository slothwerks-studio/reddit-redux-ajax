import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Rich Man's Reddit</h1>
        { this.props.isLoading &&
            <h3>Loading...</h3>
        }
        <Posts posts={this.props.redditFeed} />
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        isLoading: state.isLoading,
        redditFeed: state.redditFeed
    };
}

export default connect(mapStateToProps)(App);