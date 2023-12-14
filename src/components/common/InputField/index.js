import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Text from '../Text';
import { DEFAULT_TEXT } from '@/constants';
import { IC_Close, IC_CloseEye, IC_Eye } from '@/assets';
import { scale } from '@/utils';

const InputField = props => {
  const {
    containerStyle,
    title = DEFAULT_TEXT.EMPTY_CONTENT,
    titleStyle,
    otpInput,
    clearPress = false,
    showPass = false,
    valueInput,
    onChangeValueInput,
    isRead = false,
    ...rest
  } = props;
  const [text, setText] = useState(valueInput);
  const [isShow, setIsShow] = useState(false);

  const handleShowHidePassword = () => {
    setIsShow(isShow => !isShow);
  };

  const onChangeText = value => {
    setText(value);
    onChangeValueInput?.(value);
  };

  const onClearPress = () => {
    setText('');
  };

  return (
    <View style={containerStyle}>
      <View style={styles.containerTitle}>
        {title && <Text content={title} textStyle={titleStyle} />}
        {title && <Text content={'*'} textStyle={styles.required} />}
      </View>
      <View style={styles.containerInput}>
        <TextInput
          value={text}
          onChangeText={onChangeText}
          secureTextEntry={isShow}
          keyboardType={otpInput ? 'numeric' : 'default'}
          style={styles.input}
          disableFullscreenUI={isRead}
          {...rest}
        />
        {clearPress && text && (
          <TouchableOpacity
            onPress={onClearPress}
            style={styles.button}
            hitSlop={2}
            activeOpacity={0.5}>
            <IC_Close />
          </TouchableOpacity>
        )}
        {showPass && (
          <TouchableOpacity
            onPress={handleShowHidePassword}
            style={styles.button}
            hitSlop={2}
            activeOpacity={0.5}>
            {isShow ? <IC_CloseEye /> : <IC_Eye />}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: scale(8)
  },
  required: {
    color: 'red'
  },
  input: {
    width: '80%'
  },
  button: {
    width: scale(24),
    height: scale(24),
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default InputField;
