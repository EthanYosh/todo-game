import React from 'react'

function Shop() {
  return (
    <React.Fragment>
      <h1>Shop</h1>
      <p>Place for lootbox & buying stats</p>
      <br />
      <div className='stat'>
        <button>-1</button>
        <p className='textPad'> Attack </p>
        <button>+1</button>
      </div>
      <br />
      <div className='stat'>
        <button>-1</button>
        <p className='textPad'> Armor </p>
        <button>+1</button>
      </div>
      <br />
      <div className='stat'>
        <button>-1</button>
        <p className='textPad'> Health </p>
        <button>+1</button>
      </div>
      <br />
      <div className='stat'>
        <button>-1</button>
        <p className='textPad'> Speed </p>
        <button>+1</button>
      </div>

    </React.Fragment>
  )
}


export default Shop;