import React from 'react';
import Form from '../../components/Form';
import Content from './Content';
import './signin.scss';

interface Props {
  setIsLogged: (value: boolean) => void;
}

const SignIn: React.FC<Props> = ({ setIsLogged }) => {
  return (
    <div className="signin">
      <Content />
      <Form setIsLogged={setIsLogged} />
    </div>
  );
};

export default SignIn;
