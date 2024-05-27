import { TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import styles from './styles';

const Button = ({ children, onPress, type, style, ...rest }) => {
  const getTouchableComponent = () => {
    switch (type) {
      case 'highlight':
        return TouchableHighlight;
      case 'withoutFeedback':
        return TouchableWithoutFeedback;
      default:
        return TouchableOpacity;
    }
  };
  const TouchableComponent = getTouchableComponent();
  return (
    <TouchableComponent style={[styles.button, style]} onPress={onPress} hitSlop={1} {...rest}>
      {children}
    </TouchableComponent>
  );
};

export default Button;
