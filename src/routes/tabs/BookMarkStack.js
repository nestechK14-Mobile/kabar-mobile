import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES, defaultConfigStack } from '@/constants';
import { BookMarkScreen } from '@/screens';

const BookMarkStack = createNativeStackNavigator();

const BookMarkRoutes = () => {
  return (
    <BookMarkStack.Navigator screenOptions={defaultConfigStack}>
      <BookMarkStack.Screen name={SCREEN_NAMES.BOOKMARK_SCREEN} component={BookMarkScreen} />
    </BookMarkStack.Navigator>
  );
};

export default BookMarkRoutes;
