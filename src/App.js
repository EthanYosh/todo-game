import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
import Mainmenu from './components/Mainmenu';

class App extends Component {

  user = {
    name: <h1>Bob</h1>,
    avatar: <img src="./ProfilePic.png" alt="profile pic"/>, 
  }



  state = {
    todos: [
        {
            id: 1,
            title: 'finish new song',
            extranotes: '',
            completed: false
        },

        {
            id: 2,
            title: 'make lunch for family',
            extranotes: '',
            completed: false 
        },

        {
            id: 3,
            title: 'brainstorm new feature ideas',
            extranotes: '',
            completed: false 
        },

        {
            id: 4,
            title: 'practice javascript more',
            extranotes: '',
            completed: false 
        },

        {
            id: 5,
            title: 'listen to new music',
            extranotes: '',
            completed: false 
        }
    ]
}

  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })});
  }



  changeDoggoName = (newName) => {
    this.setState({ newDoggo: newName.target.value });
  };




  addDoggo = () => {

    let newDog = {
      title: this.state.newDoggo,
    };


    this.setState((state) => ({
      todos: [...state.todos, newDog], //im using the spread operator because I only want to change 1 part (the new dog) and keep all the other parts the same when it re-renders
      newDoggo: "",
    }));
  };

  render() {
    return (

      <div className="App">
        <Mainmenu/>
        <div id="theUser">
          <div id="theUserName">
            {this.user.name}
          </div>

          <div id="theUserAvatar">
            {this.user.avatar}
          </div>
        </div>





        <Todos todos={this.state.todos} markComplete={this.markComplete}/>
        <div>
          <input className ="newDog" type="text" value={this.state.newDoggo} onChange={this.changeDoggoName} placeholder="Type new ToDo"></input>
          <button onClick={this.addDoggo} disabled={this.state.newDoggo === ""}>Add New ToDo</button>
        </div>
        <Navbar />
      </div>
    );
  }
}

export default App;
