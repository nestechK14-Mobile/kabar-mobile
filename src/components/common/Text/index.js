import { StyleSheet, Text } from 'react-native';
import React, { memo } from 'react';
import { COLORS, DEFAULT_TEXT } from '@/constants';
import { FONTS } from '@/assets';
import { scale } from '@/utils';

const AppText = props => {
  const {
    content = DEFAULT_TEXT.EMPTY_CONTENT,
    textStyle,
    fontFamily = FONTS.REGULAR,
    fontSize = scale(13),
    color = COLORS.BLACK
  } = props;

  return (
    <Text style={[styles.default, { fontFamily, fontSize, color }, textStyle]}>{content}</Text>
  );
};

export default memo(AppText);

const styles = StyleSheet.create({
  default: {
    color: COLORS.BLACK,
    fontSize: scale(20),
    fontFamily: FONTS.REGULAR
  }
});
