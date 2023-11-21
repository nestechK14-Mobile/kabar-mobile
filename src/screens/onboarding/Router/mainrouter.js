import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import tabrouters from '@/screens/onboarding/Router/tabrouters';
const MainStack = createNativeStackNavigator();
const TabMain = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name={'tabrouters'} component={tabrouters} />
    </MainStack.Navigator>
  );
};

export default TabMain;
