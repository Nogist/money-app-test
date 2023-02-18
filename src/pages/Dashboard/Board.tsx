import React from 'react'

const Board:React.FC = () => {
  return (
    <div className='dashboard__board'>
      <div className='dashboard__board__main'>
        <div className='dashboard__board__logo'>
          <h3><p>CN</p></h3>
          <h2>The Company Name</h2>
        </div>
        <span>
          <p>CEO</p>
          <h2>The Ceo Name</h2>
        </span>
        <span className='board__names'>
          <p>CTO</p>
          <h2>The Cto Name</h2>
        </span>
      </div>
    </div>
  )
}

export default Board