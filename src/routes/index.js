import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREENS_STACK, defaultConfigStack } from '@/constants';
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
