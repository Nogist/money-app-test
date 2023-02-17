import React from 'react';
import './signin.scss';
import logo from '../../assets/logo.png';
import earn from '../../assets/icon1.png';
import manage from '../../assets/icon2.png';
import delegate from '../../assets/icon3.png';
import tick from '../../assets/tick.png';

const Content:React.FC = () => {

  let text ='Easily see how much your busineses are earning on each transaction and watch your earnings rise. '

  return (
    <div className='signin__content'>
      <div className='content__header'>
          <div className='content__header__img'>
            <img src={logo} alt="logo" />
          </div>
          <div className='content__header__content'>
            <h1>Hi there, see what's new</h1>
            <h2>Here’s how Foodcourt helps you manage your daily operations and ensure your riders are efficient</h2>
          </div>
      </div>
      <div className='content__main'>
        <div className='content__main__text'>
          <div>
            <img src={earn} alt='icon' />
          </div>
          <span>
            <h3>Monitor your Earnings</h3>
            <p>{text} </p>
          </span>
        </div>
        <div className='content__main__text'>
          <div>
            <img src={manage} alt='icon' />
          </div>
          <span>
            <h3>Manage your Business</h3>
            <p>{text} </p>
          </span>
        </div>
        <div className='content__main__text border'>
          <div>
            <img src={delegate} alt='icon' />
          </div>
          <span>
            <h3>Delegate to Staff</h3>
            <p>{text} <img src={tick} alt='/' /> </p>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Content