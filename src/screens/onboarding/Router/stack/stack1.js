import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';

import Screen2 from '@/screens/onboarding/screens/screen2';

const Stack01Router = createNativeStackNavigator();

const Stack1 = () => {
  return (
    <Stack01Router.Navigator screenOptions={{ headerShown: false }}>
      <Stack01Router.Screen name={'Screen2'} component={Screen2} />
    </Stack01Router.Navigator>
  );
};

export default Stack1;
