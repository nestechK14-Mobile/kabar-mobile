import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const InputField = ({ title, secureTextEntry,children, otpInput, onClearPress, ...rest}) => {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      {title && <Text>{title}</Text>}
      <TextInput
        value={text}
        onChangeText={inputText => setText(inputText)} 
        secureTextEntry={secureTextEntry}
        keyboardType={otpInput ? 'numeric' : 'default'}
        {...rest}
      />
      {onClearPress && <TouchableOpacity onPress={onClearPress}>{children}</TouchableOpacity>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10
  }
});

export default InputField;
