import { View, Text } from 'react-native';
import React from 'react';
import { FONTS, IC_Back } from '@/assets';

const OnboardingView = ({ title }) => {
  return (
    <View>
      <Text style={{ fontSize: 30, fontFamily: FONTS.BOLD }}>{title}</Text>
      <IC_Back style={{ width: 1000, height: 1000, color: 'red' }} />
    </View>
  );
};

export default OnboardingView;
