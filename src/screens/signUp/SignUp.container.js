import React, { useState } from 'react';
import SignUpView from './SignUp.view';
import { PAGE_CONSTANTS } from '@/constants';

const SignUpContainer = () => {
  const { CONTENT_LABEL } = PAGE_CONSTANTS.AUTHENTICATION;
  const { SIGN_UP } = CONTENT_LABEL;
  const [userName, setUserName] = useState('');
  const [errorText, setErrorText] = useState('');

  const onChangeValueUserName = value => {
    setUserName(value);
  };

  const handleSignUp = () => {
    if (!userName) {
      setErrorText('Cần nhập UserName!');
    }
  };

  const propsSignUp = {
    onChangeValueUserName,
    handleSignUp,
    errorText,
    SIGN_UP
  };

  return <SignUpView {...propsSignUp} />;
};

export default SignUpContainer;
