import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const InputField = ({ title, secureTextEntry, children, otpInput, onClearPress, ...rest }) => {
  const [text, setText] = useState('');

  return (
    <View>
      <View>{title && <Text>{title}</Text>}</View>
      <View>
        <TextInput
          style={styles.container}
          value={text}
          onChangeText={inputText => setText(inputText)}
          secureTextEntry={secureTextEntry}
          keyboardType={otpInput ? 'numeric' : 'default'}
          {...rest}
        />
        {onClearPress && <TouchableOpacity onPress={onClearPress}>{children}</TouchableOpacity>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 16
  }
});

export default InputField;
