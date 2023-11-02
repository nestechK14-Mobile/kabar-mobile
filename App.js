import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import React, { useEffect } from 'react';
import { FONTS, IC_ArrowDown, IC_Back, IC_Bell, IC_Camera, IC_Chat, IC_Clock, IC_Google, IC_Plus, IMG_Art } from '@/assets';
import { COLORS } from '@/constants';
import ButtonFullFeature from '@/component/common/button/full-feature';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
      <Text style={{  color: COLORS.BLACK, fontFamily: FONTS.REGULAR }}>HomeScreen-by MinhTuan</Text>
      <IC_Back />
      <IMG_Art />
      <ButtonFullFeature
      IconLeft  = {IC_Clock}
      IconRight = {IC_Google}
      LabelText = {'Button label'}
      //LabelTextFont = {FONTS.BLACK}
      LabelTextSize = {Number(60)}
      LabelTextWeight = {'700'}
      textColor = {COLORS.BLACK}
      IconLeftColor = {"blue"}
      IconRightColor = {"green"}
      bordercolor = {'#70676EF0'}
      //buttoncolor = {COLORS.PRIMARY_BLUE}
      iconLeftSize = "30"
      iconRightSize = "20"
      
      />
    </View>
  );
};

export default App;
