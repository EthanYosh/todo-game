import React from 'react';


function Header() {
  return (
    <header style={headerStyle}>
      <img src="https://i.imgur.com/mFwVOnE.png" alt="Tasknights logo" width="500" height="500" />
    </header>
  )
}

var headerStyle = {
  background: '#5282ca',
  textAlign: 'center',
  padding: '10px'
}

export default Header;