import { TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

const Button = ({ children, onPress, type, disabled, ...rest }) => {
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
    <TouchableComponent onPress={onPress} hitSlop={1} disabled={disabled} {...rest}>
      {children}
    </TouchableComponent>
  );
};

export default Button;
