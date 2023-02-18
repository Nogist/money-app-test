import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';


const Form:React.FC = () => {
  return (
    <div className='form'>
      <form className='form__body'>
        <div className='form__body__header'>
          <h1>Login to your dashboard</h1>
          <h2>Provide details to login to your account</h2>
        </div>
        <div className='form__body__input'>
          <span>
            <label htmlFor="email">Email</label>
            <p><input type="email" /></p>
          </span>
          <span>
            <label htmlFor="password">Password</label>
            <p><input type="password" /></p>
            <h6><AiOutlineEye id='eye__icon' /></h6>
          </span>
          <button type='submit'>Login</button>
        </div>
        <div className='form__body__button'>

        </div>
      </form>
    </div>
  )
}

export default Form