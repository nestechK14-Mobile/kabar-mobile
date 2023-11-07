import { View, Text } from 'react-native';
import React from 'react';
import styles from './SignIn.styles';
import { AppLoading } from '@/components';

const SignInView = props => {
  const { stated } = props;

  return (
    <View style={styles.container}>
      {stated === 12 && <AppLoading />}
      <Text style={{ fontSize: 100 }}>{stated}</Text>
    </View>
  );
};

export default SignInView;
