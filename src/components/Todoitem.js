import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {


  getStyle = () => {
    return {
      borderBottom: "1px lightblue double",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      background: "#000",
      padding: "25px",
    };
  };



  render() {
    var { id, title, completed } = this.props.todo;



    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={this.props.markComplete.bind(this, id)}
          />
          {title}


          
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>
            x
          </button>
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

var btnStyle = {
  background: "lightblue",
  color: "#000",
  float: "right",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
};

export default TodoItem;