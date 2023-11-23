import { View, Text } from 'react-native';
import React from 'react';
import { FONTS, IC_Back, IC_Bell } from '@/assets';
import { COLORS } from '@/constants';

const OnboardingView = ({ title }) => {
  return (
    <View style={{ backgroundColor: COLORS.WHITE, flex: 1 }}>
      <Text style={{ fontSize: 30, fontFamily: FONTS.BOLD }}>{title}</Text>
      <IC_Back />
      <IC_Bell />
    </View>
  );
};

export default OnboardingView;
