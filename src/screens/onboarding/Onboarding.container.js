import React from 'react';
import OnboardingView from './Onboarding.view';
import { useNavigation } from '@react-navigation/native';
import { SCREENS_STACK } from '@/constants';

const OnboardingContainer = () => {
  const navigation = useNavigation();

  const navigateToAuth = () => {
    navigation.navigate(SCREENS_STACK.AUTH_STACK);
  };

  

  return <OnboardingView {...{navigateToAuth}} />;
};

export default OnboardingContainer;
