import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Stack1 from '@/screens/onboarding/Router/stack/stack1';
import Stack2 from '@/screens/onboarding/Router/stack/stack2';
import Stack3 from '@/screens/onboarding/Router/stack/stack3';
import Stack4 from '@/screens/onboarding/Router/stack/stack4';
import { Image } from 'react-native';

const TabStack = createBottomTabNavigator();
const TabRouter = () => {
  return (
    <TabStack.Navigator screenOptions={{ headerShown: false }}>
      <TabStack.Screen
        name={'Home'}
        component={Stack1}
        options={{
          tabBarLabel: 'Home',
          // tabBarActiveTintColor: 'red',
          tabBarIcon: () => (
            <Image
              source={require('../../../assets/icons/IC_Home.png')}
              style={{ with: 24, height: 24 }}
            />
          )
        }}
      />
      <TabStack.Screen
        name={'Explore'}
        component={Stack2}
        options={{
          tabBarLabel: 'Explore',
          tabBarActiveTintColor: 'blue',
          tabBarIcon: () => (
            <Image
              source={require('../../../assets/icons/IC_Laban.png')}
              style={{ with: 24, height: 24 }}
            />
          )
        }}
      />
      <TabStack.Screen
        name={'BookMark'}
        component={Stack3}
        options={{
          tabBarActiveTintColor: 'blue',
          tabBarIcon: () => <Image source={require('../../../assets/icons/IC_Bookmark.png')} />
        }}
      />
      <TabStack.Screen
        name={'Profile'}
        component={Stack4}
        options={{
          tabBarActiveTintColor: 'blue',
          tabBarIcon: () => <Image source={require('../../../assets/icons/IC_Profile.png')} />
        }}
      />
    </TabStack.Navigator>
  );
};

export default TabRouter;
