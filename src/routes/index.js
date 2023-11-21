import { View, Text } from 'react-native';
import React from 'react';

import { OnboardingScreen, SignInScreen, HomeScreen } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS_STACK, SCREEN_NAMES, defaultConfigStack } from '@/constants';
import AuthRoutes from './tabs/AuthStack';
import MainRouteTab from './MainTab';
import TabMain from '@/screens/onboarding/Router/mainrouter';

const MainStack = createNativeStackNavigator();

const MainRoutes = () => {
  return (
    <MainStack.Navigator screenOptions={defaultConfigStack}>
      <MainStack.Screen name={SCREENS_STACK.AUTH_STACK} component={TabMain} />
      <MainStack.Screen name={SCREENS_STACK.MAIN_TAB} component={MainRouteTab} />
    </MainStack.Navigator>
  );
};

export default MainRoutes;
