import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const ButtonAuthor = ({
  content,
  styleButton,
  // backgroundColor = 'transparent',
  onPress,
  styleText,
  ...rest
}) => {
  return (
    <TouchableOpacity style={[styles.default, styleButton]} onPress={onPress} {...rest}>
      <Text style={[styles.defaultText, styleText]}>{content ?? ''}</Text>
    </TouchableOpacity>
  );
};

export default ButtonAuthor;
const styles = StyleSheet.create({
  default: {
    width: 182,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#1877F2',
    borderRadius: 6
  },
  defaultText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF'
  }
});
