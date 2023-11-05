import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import React, { useEffect, useState } from 'react';
import { FONTS, IC_Back, IC_Bell, IMG_Art, IMG_Avatar, IMG_KabarLogo } from '@/assets';
import { COLORS } from '@/constants';
import CustomButton from '@/component/common/customButton';
import CustomInputField from '@/component/common/customInputField';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const [textInput, setTextInput] = useState('');
  
  const handleClearPress = () => {
    setTextInput(''); // Xóa nội dung khi nút "Clear" được nhấn
  };
  return (
    <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
      <Text style={{ color: COLORS.BLACK, fontFamily: FONTS.REGULAR }}>HomeScreen-by MinhTuan</Text>
      <IC_Back />
      <CustomButton>
      <Text>dddd</Text>
      <IMG_Avatar/>
      <IC_Bell/>
      </CustomButton>
      <IMG_Art />
      <CustomInputField title="Password" secureTextEntry onChangeText={setTextInput} value={textInput} />
      <CustomInputField  onChangeText={setTextInput} value={textInput} />


    </View>
  );
};

export default App;
