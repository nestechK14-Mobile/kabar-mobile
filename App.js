import SplashScreen from 'react-native-splash-screen';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { AppLoading, AppText } from '@/components';
import SignInContainer from '@/screens/signIn/SignIn.container';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    SplashScreen.hide();

    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SignInContainer />
    </View>
  );
};

export default App;
