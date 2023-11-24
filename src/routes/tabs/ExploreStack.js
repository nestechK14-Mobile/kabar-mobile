import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES, defaultConfigStack } from '@/constants';
import { ExploreScreen } from '@/screens';

const ExploreStack = createNativeStackNavigator();

const ExploreRoutes = () => {
  return (
    <ExploreStack.Navigator screenOptions={defaultConfigStack}>
      <ExploreStack.Screen name={SCREEN_NAMES.EXPLORE_SCREEN} component={ExploreScreen} />
    </ExploreStack.Navigator>
  );
};

export default ExploreRoutes;
