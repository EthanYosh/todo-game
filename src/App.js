import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Navbar from './components/Navbar';
import Mainmenu from './components/Mainmenu';

class App extends Component {

  user = {
    name: 'bob',
    avatar: <img src="./ProfilePic.png" alt="profile pic"/>, 
  }



  state = {
    todos: [
        {
            id: 1,
            title: 'finish new song',
            extranotes: '',
            completed: true
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


  render() {
    return (
      <div className="App">
        {this.user.name}
        {this.user.avatar}
        <Mainmenu/>
        <Todos todos={this.state.todos}/>
        <Navbar />
      </div>
    );
  }
}

export default App;
