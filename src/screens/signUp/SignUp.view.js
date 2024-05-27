import { View } from 'react-native';
import React from 'react';
// import styles from './SignUp.styles';

import styles from '@/components/common/Button/ButtonLogin/styles';
import ButtonSolid from '@/components/common/Button/ButtonSolidText';

const SignUpView = props => {
  const { navigateToBack } = props;
  return (
    <View style={styles.container}>
      <ButtonSolid content={'hêllo'} onPress={navigateToBack} />
    </View>
  );
};

export default SignUpView;
