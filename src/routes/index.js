import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS_STACK, SCREEN_NAMES, defaultConfigStack } from '@/constants';
import MainRouteTab from './MainTab';
import AuthRoutes from './tabs/AuthStack';
import { AuthorProfileScreen, OnboardingScreen } from '@/screens';

const MainStack = createNativeStackNavigator();

const MainRoutes = () => {
  return (
    <MainStack.Navigator screenOptions={defaultConfigStack}>
      <MainStack.Screen name={SCREEN_NAMES.AUTHOR_PROFILE_SCREEN} component={AuthorProfileScreen} />
      <MainStack.Screen name={SCREEN_NAMES.ONBOARDING_SCREEN} component={OnboardingScreen} />
      <MainStack.Screen name={SCREENS_STACK.AUTH_STACK} component={AuthRoutes} />
      <MainStack.Screen name={SCREENS_STACK.MAIN_TAB} component={MainRouteTab} />
    </MainStack.Navigator>
  );
};

export default MainRoutes;
