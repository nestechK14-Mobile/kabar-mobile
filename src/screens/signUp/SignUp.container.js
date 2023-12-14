import React from 'react';
import SignUpView from './SignUp.view';
import { PAGE_CONSTANTS } from '@/constants';

const SignUpContainer = () => {
  const { CONTENT_LABEL } = PAGE_CONSTANTS.AUTHENTICATION;
  const { SIGN_UP } = CONTENT_LABEL;

  const onChangeValueUserName = value => {
    console.log(value);
  };

  const propsSignUp = {
    SIGN_UP,
    onChangeValueUserName
  };

  return <SignUpView {...propsSignUp} />;
};

export default SignUpContainer;
