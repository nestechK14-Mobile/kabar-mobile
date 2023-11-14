import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SCREENS_STACK } from '@/constants';
import { HomesStack } from './tabs';

const MainTab = createBottomTabNavigator();

const MainRouteTab = () => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen name={SCREENS_STACK.HOME_STACK} component={HomesStack} />
    </MainTab.Navigator>
  );
};

export default MainRouteTab;
