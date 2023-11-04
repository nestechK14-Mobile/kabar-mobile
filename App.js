import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import React, { useEffect } from 'react';
import { FONTS, IC_Back, IMG_Art } from '@/assets';
import { COLORS } from '@/constants';
import ButtonFullFeature from '@/component/common/button/full-feature';
import ButtonPrimaryDefaut from '@/component/common/button/primary/default';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
      <Text style={{  color: COLORS.BLACK, fontFamily: FONTS.REGULAR }}>Processing..30%...ButtonComponent</Text>
      <IC_Back />
      <IMG_Art />


      <ButtonPrimaryDefaut Label = {'ButtonComponent'}/>
      
      
    </View>
  );
};

export default App;
