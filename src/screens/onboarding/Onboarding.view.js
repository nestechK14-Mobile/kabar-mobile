import { View } from 'react-native';
import React from 'react';
import styles from './Onboarding.styles';
import { AppText, Button } from '@/components';

const OnboardingView = props => {
  const { navigateToAuth } = props;
  return (
    <View style={styles.container}>
      <Button onPress={navigateToAuth}>
        <AppText content={'Vào Sign In'} />
      </Button>
    </View>
  );
};

export default OnboardingView;
