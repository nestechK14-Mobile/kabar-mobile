import React, { useRef } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const checkBox = ({ text, onPress, isChecked, containerStyle, textStyle, checkboxStyle }) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    const toValue = isChecked ? 0 : 30;
    Animated.timing(animatedWidth, {
      toValue: toValue,
      duration: 500,
      useNativeDriver: false
    }).start();
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={() => {
          startAnimation();
          onPress();
        }}
        style={[styles.checkBoxR, isChecked && styles.checkBoxSelected, checkboxStyle]}>
        <Animated.View style={{ width: animatedWidth }}>
          <Icon name="checkmark" size={30} style={{ color: 'white' }} />
        </Animated.View>
      </TouchableOpacity>
      <Text style={[styles.checkboxText, textStyle]}>{text}</Text>
    </View>
  );
};

export default checkBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkBoxR: {
    borderColor: 'blue',
    borderWidth: '2',
    borderRadius: '6',
    height: 30,
    width: 30
  },
  checkBoxSelected: {
    backgroundColor: 'green'
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 10
  }
});
