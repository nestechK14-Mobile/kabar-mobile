import { StyleSheet, Text } from 'react-native';
import React, { memo } from 'react';
import { COLORS, DEFAULT_TEXT, SIZES } from '@/constants';
import { FONTS } from '@/assets';

const AppText = props => {
  const { content = DEFAULT_TEXT.EMPTY_CONTENT, textStyle } = props;

  return <Text style={[styles.default, textStyle]}>{content}</Text>;
};

export default memo(AppText);

const styles = StyleSheet.create({
  default: {
    color: COLORS.BLACK,
    fontSize: SIZES.FONT_SIZE.SMALL,
    fontFamily: FONTS.REGULAR
  }
});
