import React, { Component } from "react";
import PropTypes from "prop-types";




var btnStyle =
{
  background: "#DC143C",
  color: "#000",
  cursor: "pointer",
  float: "inline-end",
  border: "none",
  borderRadius: "50%",
  marginLeft: "15px",
};

var btnStyleTwo =
{
  background: "lightblue",
  color: "#000",
  float: "right",
  border: "none",
  borderRadius: "50%",
  opacity: "0%",
};


export class TodoItem extends Component {


  getStyle = () => {
    return {
      borderBottom: "1px lightblue double",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      background: "#000",
      padding: "25px",
    };
  };

  notCompleted() {
    return <button style={btnStyleTwo}>x</button>;
  };
  
  yesCompleted() {
    return <button style={btnStyle} onClick={this.props.delTodo.bind(this, this.props.todo.id)}>x</button>;
  };
  
  showDelete() {
    var hasCompleted = this.props.todo.completed;
    if (hasCompleted===true) {
      return this.yesCompleted()
    }
    return this.notCompleted();
  }



  render()  {
    var { id, title, completed } = this.props.todo;
    var editButton = <button id="editButton">Edit</button>;


    return (

      <div style={this.getStyle()}>

        <p id="todoTitle">
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={this.props.markComplete.bind(this, id)}
            id="todoCheckbox"
          />

          {title}
          <a href="/Edit">{editButton}</a>
          

          {this.showDelete()}




        </p>

      </div>
    );
  }
}

TodoItem.propTypes = {
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
};


export default TodoItem;