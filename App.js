import SplashScreen from 'react-native-splash-screen';
import React, { useEffect, useState } from 'react';
<<<<<<< HEAD
import { FONTS, IC_Back, IC_Bell, IMG_Art, IMG_Avatar, IMG_KabarLogo } from '@/assets';
import { COLORS } from '@/constants';
import CustomButton from '@/component/common/customButton';
import CustomInputField from '@/component/common/customInputField';
=======
import { View } from 'react-native';
import { AppLoading, AppText } from '@/components';
>>>>>>> develop

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    SplashScreen.hide();

    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, []);
  const [textInput, setTextInput] = useState('');
  
  const handleClearPress = () => {
    setTextInput(''); // Xóa nội dung khi nút "Clear" được nhấn
  };
  return (
<<<<<<< HEAD
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


=======
    <View style={{ flex: 1 }}>
      {isLoading && <AppLoading />}
      <AppText content={'Hello World, 123 Alo'} textStyle={{ color: 'red', fontSize: 100 }} />
      <AppText content={'Hello World, 123 Alo'} textStyle={{ color: 'yellow', fontSize: 50 }} />
>>>>>>> develop
    </View>
  );
};

export default App;
