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

        <div id="theUser">

          <div id="theUserName">
            {this.user.name}
          </div>

          <div id="theUserAvatar">
            {this.user.avatar}
          </div>
        </div>




        <Mainmenu/>
        <Todos todos={this.state.todos}/>
        <Navbar />
      </div>
    );
  }
}

export default App;
