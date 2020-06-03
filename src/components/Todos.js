import React, { Component } from 'react';
import Todoitem from './Todoitem';
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {
      return this.props.todos.map((eachtodo) => ( //the map part shows where I am. I can use the props because I put properties on this component in the App.js file.
          <Todoitem key={eachtodo.id} eachtodo={eachtodo} markComplete={this.props.markComplete}/>


      ));
    }
}

//this section makes it so I can add customization to all the properties I've been putting on the components. Remember that I can only do this if I import the PropTypes from prop-types.
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
