import './index.css';
import './App.css';
import React, { Component, useState, useEffect, useRef } from 'react'
import Header from './components/Header';
import Todos from './components/Todos';
import Add from './components/Add';
import Shop from './components/Shop';
import uuidv4 from 'uuid'

 

import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as BattleIcon } from './icons/battle.svg';
import { ReactComponent as GuildIcon } from './icons/guild.svg';
import { ReactComponent as ProfileIcon } from './icons/profile.svg';


import { ReactComponent as HomeIcon } from './icons/home.svg';
import { ReactComponent as AddTaskIcon } from './icons/addtask.svg';
import { ReactComponent as ShopIcon } from './icons/shop.svg';


import { CSSTransition } from 'react-transition-group'; //I'm using this for transition states on my hamburger menu over time. I referenced this document on how to use it. https://alligator.io/react/react-transition-group/
import { BrowserRouter as Router, Route } from 'react-router-dom'; //im using this to "conditionally render certain components to display depending on the route being used in the url" this is how the stuff like /add or /market and stuff are made. I used this article for reference. https://www.freecodecamp.org/news/react-router-in-5-minutes/
import { Link } from 'react-router-dom';


class App extends Component {

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
};



  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };



  delTodo = id => {

    var { todos } = this.state;
    var thisID = todos.findIndex((task) => task.id === id);

    todos.splice(thisID, 1);
    this.setState({ todos });
  };



  addTodo = (titleOfTodo) => {
    const todosAlias = this.state.todos;
    todosAlias.push({
      id: uuidv4(),
      title: titleOfTodo,
      extranotes: "",
      completed: false,
    });
    this.setState({ todosAlias });
  };





  render() {
    return (
      <Router>
          <Navbar>
            <NavItem icon={<CaretIcon />}>
              <DropdownMenu></DropdownMenu>
            </NavItem>
          </Navbar>
        <div className="Appoo">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>

                  <div className="bodyPortion">
                    <Todos
                      todos={this.state.todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                    />
                  </div>
                </React.Fragment>
              )}
            />
          </div>
          <Route path="/AddTask">
            <Add addTodo={this.addTodo} />
          </Route>
          <Route path="/Shop" component={Shop} />
          <div className="bottomMenu">
            <Link style={linkStyle} to="/"><HomeIcon /></Link>        <Link style={linkStyle} to="/AddTask"><AddTaskIcon /></Link>        <Link style={linkStyle} to="/Shop"><ShopIcon /></Link>
          </div>

        </div>
      </Router>
    );
  }
}

function NavItem(secondShell) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">

    {/* eslint-disable-next-line */}
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {secondShell.icon}
      </a>

      {open && secondShell.children}
    </li>
  );
}




function Navbar(outerMenuShell) {

  return (
    <nav className="navbar">
      <ul className="navbar-nav">{outerMenuShell.children}</ul>
    </nav>
  );
}



var linkStyle = {
  paddingRight: '15px',
  paddingLeft: '15px',
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
    /* eslint-disable-next-line */
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (

/*MAIN OUTER MENU ANIMATIONSSSSSSS */

    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="outerMenu"
        unmountOnExit
        onEnter={calcHeight}>



        <div className="menu">
        <DropdownItem
            leftIcon={<ProfileIcon />}
            goToMenu="Profile"> {/*need to decide whether I want a sub menu for profile or if it should just go straight to a profile page when clicked*/}
            Profile
          </DropdownItem>
          <DropdownItem
            leftIcon={<BattleIcon />}
            goToMenu="Battle">
            Battle
          </DropdownItem>
          <DropdownItem
            leftIcon={<GuildIcon />}
            goToMenu="Guild">
            Guild
          </DropdownItem>
        </div>
      </CSSTransition>









{/*INNER BATTLE MENU */}

      <CSSTransition
        in={activeMenu === 'Battle'}
        timeout={500}
        classNames="innerMenu"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<GuildIcon />}>
            <h2>Battle Menu</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<GuildIcon />}>Info</DropdownItem>
          <DropdownItem leftIcon={<GuildIcon />}>Normal</DropdownItem>
          <DropdownItem leftIcon={<GuildIcon />}>Ranked</DropdownItem>
        </div>
      </CSSTransition>







{/*INNER GUILD MENU */}

      <CSSTransition
        in={activeMenu === 'Guild'}
        timeout={500}
        classNames="innerMenu"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<GuildIcon />}>
            <h2>Guild</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🩸">Research</DropdownItem>
          <DropdownItem leftIcon="🩸">Info</DropdownItem>
          <DropdownItem leftIcon="🩸">Battle</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}


export default App;