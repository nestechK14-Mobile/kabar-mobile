import React from 'react';
import { SignInScreen, SignUpScreen } from '@/screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES, defaultConfigStack } from '@/constants';
import AuthorView from '@/screens/Author/Author.view';

const AuthStack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <AuthStack.Navigator screenOptions={defaultConfigStack}>
      <AuthStack.Screen name={SCREEN_NAMES.SIGN_IN_SCREEN} component={SignInScreen} />
      <AuthStack.Screen name={SCREEN_NAMES.SIGN_UP_SCREEN} component={SignUpScreen} />
      <AuthStack.Screen name={SCREEN_NAMES.AUTHOR_SCREEN} component={AuthorView} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
