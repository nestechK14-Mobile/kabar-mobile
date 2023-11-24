import React from 'react';
import SignInView from './SignIn.view';
import { useNavigation } from '@react-navigation/native';
import { SCREENS_STACK } from '@/constants';

const SignInContainer = () => {
  const navigation = useNavigation();

  const navigateToTab = () => {
    navigation.navigate(SCREENS_STACK.MAIN_TAB);
  };

  return <SignInView {...{navigateToTab}}/>;
};

export default SignInContainer;
