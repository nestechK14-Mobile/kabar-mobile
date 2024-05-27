import React from 'react';
import { View } from 'react-native';
import { Button, InputField, Text } from '@/components';
import styles from '@/components/common/Button/ButtonLogin/styles';
import ButtonSolid from '@/components/common/Button/ButtonSolidText';

const SignInView = props => {
  const { navigateToTab } = props;

  return (
    <View>
      <View>
        <ButtonSolid content={'nút 123'} onPress={navigateToTab} />
      </View>
      <View>
        <InputField title={'cc'} />
      </View>
    </View>
  );
};

export default SignInView;
