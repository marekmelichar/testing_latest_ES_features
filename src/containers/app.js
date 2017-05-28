import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import co from 'co';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }

    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()

    console.log('button', event.target);

    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    //   .then( response => response.json() )
    //   .then( post => post.title )
    //   .then ( x => console.log('Title: ', x) )

    co(function* () {
      const uri = 'https://jsonplaceholder.typicode.com/posts/1'
      const response = yield fetch(uri)
      const post = yield response.json()
      const title = post.title
      console.log('title: ', title)
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.onSubmit}>Submit to start GENERATOR</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // whatever is returned here, gets in as a prop
  return {

  };
};

export default connect(mapStateToProps, actions)(App);
