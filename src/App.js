import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import React, { useEffect } from 'react';
import { FONTS, IC_Back, IMG_Art } from '@/assets';
import { COLORS, TYPE_BUTTON } from '@/constants';
import { AppButton, AppText } from '@/components';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
      <Text style={{ color: COLORS.BLACK, fontFamily: FONTS.REGULAR }}>
        Processing..30%...ButtonComponent
      </Text>
      <IC_Back />
      <IMG_Art />
      <AppText content={'Hello World'} />
      <AppButton typeButton={TYPE_BUTTON.DEFAULT} label={{ content: 'Hello World 123' }} />
    </View>
  );
};

export default App;
