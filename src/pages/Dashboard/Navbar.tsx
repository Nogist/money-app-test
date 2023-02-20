import React from 'react';
import logo from '../../assets/logo.png';
import './dashboard.scss';

const Navbar:React.FC = () => {
  return (
    <div className='dashboard__navbar'>
      <img src={logo} alt='logo' />
    </div>
  )
}

export default Navbar