import React from 'react';
import SignInView from './SignIn.view';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAMES } from '@/constants';

const SignInContainer = () => {
  const navigation = useNavigation();

  const navigateToTab = () => {
    navigation.navigate(SCREEN_NAMES.SIGN_UP_SCREEN);
  };

  return <SignInView {...{ navigateToTab }} />;
};

export default SignInContainer;
