import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css'


var notComplete =
{
  border: "none",
  background: "#555",
  color: "#fff",
  padding: "7px 20px",
  opacity: "0%",
  marginTop: "25px",
  marginBottom: "50px",
};

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


  state = {
    title: '',
    extranotes: '',
    isgroup: false
  }



  onChange = (allowTyping) => this.setState({ [allowTyping.target.name]: allowTyping.target.value });



  onSubmit = (placeHolderVar) => {
    placeHolderVar.preventDefault();
    this.props.addTodo(this.state.title, this.state.extranotes, this.state.isgroup);
    this.setState({ 
      title: '',
      extranotes: '',
      isgroup: false
    });
    alert("Successfully edited this task! Please click the home icon to navigate back to your task list!")
  }

  notCompleted() {
    return <input type="submit" value="Submit" className="submitButton-addToDo" style={notComplete} />;
  };
  
  yesCompleted() {
    return <input type="submit" value="Submit" className="submitButton-addToDo" style={yesComplete} />;
  };
  
  showDelete() {
    if (this.state.title !== '' && this.state.extranotes !== '') {
      return this.yesCompleted()
    }
    return this.notCompleted();
  }


  render() {
    return (





      <form onSubmit={this.onSubmit}>
        <div className="theInfo">

          <p id="addTextho">Change Name</p>  
          <input 
            type="text" 
            maxlength="25"
            name="title" 
            placeholder="finish this up with placeholder using this.title" 
            value={this.state.title}
            onChange={this.onChange}
            style={inputStyle}
          />



          <p id="addTextho">Change Description</p>   
          <input 
            type="text" 
            name="extranotes" 
            placeholder="finisht his up with placeholder using this.extranotes" 
            value={this.state.extranotes}
            onChange={this.onChange}
            style={inputStyle}
          />

          <p id="addTextho">TasKnight, is this a group task?</p>
          <input type="radio" className="extranotes" name="isgroup" value={this.state.isgroup===true} />
          <label for="isgroup">Yes</label><br />
          <input type="radio" className="extranotes" name="isgroup" value={this.state.isgroup===false} checked />
          <label for="isgroup">No</label><br />


          {this.showDelete()}
        </div>



      </form>




    )
  }
}

Edit.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Edit