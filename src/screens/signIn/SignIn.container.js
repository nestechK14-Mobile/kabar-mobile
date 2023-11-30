import React from 'react';
import SignInView from './SignIn.view';
import { useNavigation } from '@react-navigation/native';
import { PAGE_CONSTANTS, SCREENS_STACK } from '@/constants';

const SignInContainer = () => {
  const navigation = useNavigation();
  const { SIGN_IN_LABEL } = PAGE_CONSTANTS.AUTHENTICATION;

  const navigateToTab = () => {
    navigation.navigate(SCREENS_STACK.MAIN_TAB);
  };

  return <SignInView {...{ navigateToTab, SIGN_IN_LABEL }} />;
};

export default SignInContainer;
