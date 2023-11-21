import React from 'react';

import { View, Image } from 'react-native';

const Screen2 = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../../../assets/image/IMG_KabarLogo.png')}
        style={{ height: 30, width: 99, marginTop: 10 }}
      />
    </View>
  );
};

export default Screen2;
