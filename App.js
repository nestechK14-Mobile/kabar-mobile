import { Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import React, { useEffect } from 'react';

// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs();//Ignore all log notifications

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <View>
      <Text>HomeScreen-by MinhTuan</Text>
    </View>
  );
};

export default App;
