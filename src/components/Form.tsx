import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { UserContext } from '../Admin/UserContext';

interface Props {}

const Form:React.FC<Props>= () => {

  //Password Visibility
  const [password, setPassword] = useState(false);  
  const togglePasswordVisibility = () => {
    setPassword(!password);
  }

  //getting the user context and confirming data 
  const { user }= useContext(UserContext);

  //navigating to next page
  let navigate = useNavigate();

  const HandleSignup = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const Email = (event.target as any).email.value;
    const Password = (event.target as any).password.value;

    if (Email === user.email && Password === user.password) {
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  }
  

  return (
    <div className='form'>
      <form className='form__body' onSubmit={HandleSignup} >
        <div className='form__body__header'>
          <h1>Login to your dashboard</h1>
          <h2>Provide details to login to your account</h2>
        </div>
        <div className='form__body__input'>
          <span>
            <label 
              htmlFor="email">Email
            </label>
            <p>
              <input 
                type="email"
                name="email"
              />
            </p>
          </span>
          <span>
            <label 
              htmlFor="password">Password
            </label>
            <p>
              <input 
                type={password ? 'text' : 'password'}
                name="password"
                placeholder='Password'
                required
              />
            </p>
            <h6 onClick= {togglePasswordVisibility}>
              {password ? (<AiOutlineEye id='eye__icon' />) : (<AiOutlineEyeInvisible id='eye__icon'/>) }</h6>
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