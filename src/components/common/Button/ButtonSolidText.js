import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import React from 'react';

import { COLORS } from '@/constants';
// import Text from '../Text';
const ButtonSolid = ({
  backgroundColor = 'transparent',
  styleButton,
  styleText,
  content,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[styles.default, styleButton, { backgroundColor: backgroundColor }]}
      onPress={onPress}
      {...rest}>
      <Text style={styleText}>{content ?? ''}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSolid;
const styles = StyleSheet.create({
  default: {
    width: '100%',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center'
  },
  defaultTitle: {
    fontSize: 16,
    color: COLORS.BLACK
  }
});
