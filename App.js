import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import React, { useEffect } from 'react';
import { IC_Back, IMG_Art } from '@/assets';
import { AppText } from '@/components';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
      <IC_Back />
      <IMG_Art />
      <AppText content={'Hello World, 123 Alo'} textStyle={{ color: 'red', fontSize: 100 }} />
      <AppText content={'Hello World, 123 Alo'} textStyle={{ color: 'yellow', fontSize: 50 }} />
    </View>
  );
};

export default App;
