import { StyleSheet, View } from 'react-native';
import React from 'react';
import { AppText } from '@/components';
import { scale } from '@/utils';
import { FONTS } from '@/assets';
import { COLORS } from '@/constants';

const AuthorContent = ({ title, subTitle, titleStyle, isCenter, isFlex, containerStyle }) => {
  // const checkIsFlex = () => {
  //   if (
  //     isFlex !== null &&
  //     isFlex !== undefined &&
  //     isFlex !== '' &&
  //     typeof isFlex === 'boolean' &&
  //     isFlex === true
  //   ) {
  //     return styles.container;
  //   } else {
  //     return null;
  //   }
  // };

  // const checkIsFlex = () => {
  //   return isFlex && typeof isFlex === 'boolean';
  // };

  const isStyleFlex = isFlex && typeof isFlex === 'boolean';

  return (
    <View
      style={[
        { alignItems: isCenter && 'center' },
        containerStyle,
        // cách 1
        // checkIsFlex()
        //cách 2
        // checkIsFlex() && styles.container
        //cách 3
        isStyleFlex && styles.container
      ]}>
      <AppText content={title ?? ''} textStyle={[styles.title, titleStyle]} />
      <AppText content={subTitle ?? ''} textStyle={styles.subTitle} />
    </View>
  );
};

export default AuthorContent;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    fontSize: scale(16),
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
    lineHeight: scale(24)
  },
  subTitle: {
    fontSize: scale(16),
    fontFamily: FONTS.SEMIBOLD,
    color: COLORS.GRAY,
    lineHeight: scale(24)
  }
});
