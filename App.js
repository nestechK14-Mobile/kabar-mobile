import SplashScreen from 'react-native-splash-screen';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { AppLoading, AppText } from '@/components';

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
      {isLoading && <AppLoading />}
      <AppText content={'Hello World, 123 Alo'} textStyle={{ color: 'red', fontSize: 100 }} />
      <AppText content={'Hello World, 123 Alo'} textStyle={{ color: 'yellow', fontSize: 50 }} />
    </View>
  );
};

export default App;
