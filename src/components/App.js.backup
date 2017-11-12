import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <div className="App">
        <p>Reddit Feed Gobbleygook</p>
        <div className="redditFeed">
        </div>
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