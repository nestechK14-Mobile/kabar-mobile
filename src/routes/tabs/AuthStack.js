import React from 'react';
import {  SignInScreen } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES, defaultConfigStack } from '@/constants';

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator screenOptions={defaultConfigStack}>
      <AuthStack.Screen name={SCREEN_NAMES.SIGN_IN_SCREEN} component={SignInScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
