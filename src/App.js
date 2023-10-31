import SplashScreen from 'react-native-splash-screen';
import React,{ useEffect } from 'react';
import { View } from 'react-native-reanimated/lib/typescript/Animated';

const App = () => {



  useEffect(() => {
   
    SplashScreen.hide();
  }, []);
  return (
    <View></View>
  );
};

export default App;

const styles = StyleSheet.create({});