import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAME } from '../constants';
import { ExploreScreen, HomeScreen, UserScreen } from '../screen';

const MainStack = createNativeStackNavigator();
const defaultConfig = {
  headerShown: false
};

const MainRouter = () => {
  return (
    <MainStack.Navigator
    screenOptions={defaultConfig}>
      <MainStack.Screen name={SCREEN_NAME.HOME_SCREEN} component={HomeScreen} />
      <MainStack.Screen name={SCREEN_NAME.EXPLORE_SCREEN} component={ExploreScreen} />
    </MainStack.Navigator>
  );
};

export default MainRouter;