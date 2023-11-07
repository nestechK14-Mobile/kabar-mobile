import { View, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';
import { COLORS } from '@/constants';

const AppLoading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={COLORS.BLUE_CRAYOLA} size={'large'} />
    </View>
  );
};

export default AppLoading;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: COLORS.BLACK_500,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 100000,
    ...StyleSheet.absoluteFill
  }
});
