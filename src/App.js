import { StyleSheet, Text, View, useColorScheme} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import React,{ useEffect } from 'react';
import MainRouter from './routers/mainRouter';
import { NavigationContainer } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications

const App = () => {



  useEffect(() => {
   
    SplashScreen.hide();
  }, []);
  return (
    
    <NavigationContainer>
      <MainRouter />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});