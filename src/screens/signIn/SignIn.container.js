import React from 'react';
import SignInView from './SignIn.view';
import { useNavigation } from '@react-navigation/native';
import { SCREENS_STACK, SCREEN_NAMES } from '@/constants';

const SignInContainer = () => {
  const navigation = useNavigation();

  const navigateToTab = () => {
    navigation.navigate(SCREENS_STACK.MAIN_TAB);
  };

  const navigateToSignUp = () => {
    navigation.navigate(SCREEN_NAMES.SIGN_UP_SCREEN);
  };

  return <SignInView {...{ navigateToTab, navigateToSignUp }} />;
};

export default SignInContainer;
