import { TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

const CustomButton = ({ children, onPress, type, ...rest }) => {
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
    <TouchableComponent onPress={onPress} hitSlop={1} {...rest}>
      {children}
    </TouchableComponent>
  );
};

export default CustomButton;
