import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { COLORS, DEFAULT_TEXT } from '@/constants';
import { scale } from '@/utils';
import { FONTS } from '@/assets';

const AppText = props => {
  const { content, contentStyle } = props;
  return (
    <Text style={[styles.default, contentStyle]}>{content ?? DEFAULT_TEXT.EMPTY_CONTENT}</Text>
  );
};

export default AppText;

const styles = StyleSheet.create({
  default: {
    fontSize: scale(13),
    color: COLORS.BLACK,
    fontFamily: FONTS.REGULAR
  }
});
