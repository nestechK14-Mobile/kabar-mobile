import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES, defaultConfigStack } from '@/constants';
import { HomeScreen } from '@/screens';

const HomeStack = createNativeStackNavigator();

const HomeRoutes = () => {
  return (
    <HomeStack.Navigator screenOptions={defaultConfigStack}>
      <HomeStack.Screen name={SCREEN_NAMES.HOME_SCREEN} component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
