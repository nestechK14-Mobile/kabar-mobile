import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { IC_CloseEye } from '@/assets';
import { Image } from 'react-native-svg';

const openEye = () => {
  return (
    <View>
      <Image IC_CloseEye />
    </View>
  );
};

export default openEye;

const styles = StyleSheet.create({});
