import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import React, { useEffect } from 'react';
import { FONTS, IC_Back, IMG_Art } from '@/assets';
import { COLORS } from '@/constants';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
      <Text style={{ color: COLORS.BLACK, fontFamily: FONTS.REGULAR }}>HomeScreen-by MinhTuan</Text>
      <IC_Back />
      <IMG_Art />
    </View>
  );
};

export default App;
