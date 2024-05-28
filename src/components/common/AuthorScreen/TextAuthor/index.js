import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const TextAuthor = ({ StyleText, content, content1, ...rest }) => {
  return (
    <View style={[styles.flex, StyleText]} {...rest}>
      <Text style={[styles.StyleText1, StyleText]} {...rest}>
        {content ?? ''}
      </Text>
      <Text style={[styles.StyleText2, StyleText]} {...rest}>
        {content1 ?? ''}
      </Text>
    </View>
  );
};

export default TextAuthor;
const styles = StyleSheet.create({
  flex: {
    justifyContent: 'center'
  },
  StyleText1: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
    textAlign: 'center'
  },
  StyleText2: {
    color: 'black',
    textAlign: 'center'
  }
});
