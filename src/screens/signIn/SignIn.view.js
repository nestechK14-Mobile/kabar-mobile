import { View, Text } from 'react-native';
import React from 'react';
import styles from './SignIn.styles';
import { Button } from '@/components';

const SignInView = props => {
  const { navigateToTab } = props;

  return (
    <View style={styles.container}>
      <Button onPress={navigateToTab}>
        <Text>Navigate to tab</Text>
      </Button>
    </View>
  );
};

export default SignInView;
