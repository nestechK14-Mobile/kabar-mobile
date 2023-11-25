import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES, defaultConfigStack } from '@/constants';
import { ProfileScreen } from '@/screens';

const ProfileStack = createNativeStackNavigator();

const ProfileRoutes = () => {
  return (
    <ProfileStack.Navigator screenOptions={defaultConfigStack}>
      <ProfileStack.Screen name={SCREEN_NAMES.PROFILE_SCREEN} component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileRoutes;
