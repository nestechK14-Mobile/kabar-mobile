import React from 'react';
import SignUpView from './SignUp.view';
import { useNavigation } from '@react-navigation/native';
import { SCREEN_NAMES } from '@/constants';
const SignUpContainer = () => {
  const navigation = useNavigation();
  const navigateToBack = () => {
    navigation.navigate(SCREEN_NAMES.AUTHOR_SCREEN);
  };
  return <SignUpView {...{ navigateToBack }} />;
};

export default SignUpContainer;
