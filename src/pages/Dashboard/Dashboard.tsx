import React from 'react'
import Board from './Board'
import Navbar from './Navbar'
import Notfification from './Notification'
import './dashboard.scss';


const Dashboard:React.FC = () => {
  return (
    <div className='dashboard'>
      <Navbar />
      <div className='dashboard__main'>
        <Board />
        <Notfification />
      </div>
    </div>
  )
}

export default Dashboard