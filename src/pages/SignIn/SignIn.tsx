import React from 'react'
import Form from '../../components/Form';
import Content from './Content';
import './signin.scss';


const SignIn:React.FC = () => {
  return (
    <div className='signin'>
      <Content />
      <Form />
    </div>
  )
}

export default SignIn