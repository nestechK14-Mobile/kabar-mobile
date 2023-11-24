import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NAME_TAB, SCREENS_STACK } from '@/constants';
import { View } from 'react-native';
import {
  IC_Bookmark,
  IC_BookmarkActive,
  IC_Explore,
  IC_ExploreActive,
  IC_Home,
  IC_HomeActive,
  IC_Profile,
  IC_ProfileActive
} from '@/assets';
import { AppText } from '@/components';
import styles from './styles';
import { BookmarkRoutes, ExploreRoutes, HomeRoutes, ProfileRoutes } from './tabs';

const MainTab = createBottomTabNavigator();

const MainRouteTab = () => {
  return (
    <MainTab.Navigator
      screenOptions={{ headerShown: false, lazy: true, tabBarStyle: styles.tabStyle }}
      initialRouteName={SCREENS_STACK.HOME_STACK}>
      <MainTab.Screen
        name={SCREENS_STACK.HOME_STACK}
        component={HomeRoutes}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>{focused ? <IC_HomeActive /> : <IC_Home />}</View>
          ),
          tabBarLabel: ({ focused }) => (
            <AppText
              content={NAME_TAB.HOME_STACK}
              textStyle={focused ? styles.textActive : styles.textDefault}
            />
          )
        }}
      />
      <MainTab.Screen
        name={SCREENS_STACK.EXPLORE_STACK}
        component={ExploreRoutes}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              {focused ? <IC_ExploreActive /> : <IC_Explore />}
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <AppText
              content={NAME_TAB.EXPLORE_STACK}
              textStyle={focused ? styles.textActive : styles.textDefault}
            />
          )
        }}
      />
      <MainTab.Screen
        name={SCREENS_STACK.BOOKMARK_STACK}
        component={BookmarkRoutes}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              {focused ? <IC_BookmarkActive /> : <IC_Bookmark />}
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <AppText
              content={NAME_TAB.BOOKMARK_STACK}
              textStyle={focused ? styles.textActive : styles.textDefault}
            />
          )
        }}
      />
      <MainTab.Screen
        name={SCREENS_STACK.PROFILE_STACK}
        component={ProfileRoutes}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.tabContainer}>
              {focused ? <IC_ProfileActive /> : <IC_Profile />}
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <AppText
              content={NAME_TAB.PROFILE_STACK}
              textStyle={focused ? styles.textActive : styles.textDefault}
            />
          )
        }}
      />
    </MainTab.Navigator>
  );
};

export default MainRouteTab;
