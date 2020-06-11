import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Add extends Component {


  state = {
    title: ''
  }



  onChange = (allowTyping) => this.setState({ [allowTyping.target.name]: allowTyping.target.value });



  onSubmit = (placeHolderVar) => {
    placeHolderVar.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }



  render() {
    return (





      <form onSubmit={this.onSubmit}>

        <input 
          type="text" 
          name="title" 
          placeholder="Sir Knight, please add a task!" 
          value={this.state.title}
          onChange={this.onChange}
        />


        <input 
          type="submit" 
          value="Submit" 
          className="submitButton-addToDo"
        />

      </form>




    )
  }
}

Add.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Add