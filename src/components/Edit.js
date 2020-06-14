import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router-dom";


var yesComplete =
{
  border: "none",
  background: "#555",
  color: "#fff",
  padding: "7px 20px",
  marginTop: "25px",
  marginBottom: "50px",
};

var inputStyle =
{
  display: "flex",
  marginBottom: "40px",
  width: "100%",
  height: "25px",
  flexWrap: "wrap",
  justifyContent: "center",
};

export class Edit extends Component {

  getTheTodoToEdit = () => { //is this the problem?
    return (
      this.props.todos.find(element => element.id === this.props.match.params.todoID) || {}
    );
  };

  state = {
    todo: this.getTheTodoToEdit(),
  }

  onChange = (allowTyping) => {
    const currentTodo = this.state.todo;
    currentTodo[allowTyping.target.name] = allowTyping.target.value;
    this.setState(currentTodo);
  };







  onSubmit = (placeHolderVar) => {
    placeHolderVar.preventDefault();
    this.props.editTodo(this.state.todo);
    this.props.history.push("/");

    this.setState({ 
      title: '',
      extranotes: '',
      isgroup: false
    });
    alert("Successfully edited this task!")
  }

  componentWillMount(pastProps) {
    if (pastProps !== this.props) {
      this.setState({ todo: this.getTheTodoToEdit() });
    }
  }

  render() {
    var currentTodo = this.state.todo;
    return (



      <form onSubmit={this.onSubmit}>
        <div className="theInfo">

          <p id="addTextho">Change Name</p>  
          <input 
            type="text" 
            maxLength="25"
            name="title"
            value={currentTodo.title}
            onChange={this.onChange}
            style={inputStyle}
          />



          <p id="addTextho">Change Description</p>   
          <input 
            type="text" 
            name="extranotes" 
            value={currentTodo.extranotes}
            onChange={this.onChange}
            style={inputStyle}
          />

          <p id="addTextho">TasKnight, is this a group task?</p>
          <input type="radio" className="extranotes" name="isgroup" value={this.state.isgroup===true} />
          <label htmlFor="isgroup">Yes</label><br />
          <input type="radio" className="extranotes" name="isgroup" value={this.state.isgroup===false} defaultChecked />
          <label htmlFor="isgroup">No</label><br />


          <input type="submit" value="Submit" className="submitButton-addToDo" style={yesComplete} />
        </div>



      </form>




    )
  }
}

Edit.propTypes = {
  editTodo: PropTypes.func.isRequired,
  todos: PropTypes.array.isRequired,
}

export default withRouter(Edit);