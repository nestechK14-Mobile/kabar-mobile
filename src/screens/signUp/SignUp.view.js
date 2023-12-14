import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import styles from './SignUp.styles';
import { InputField, Text } from '@/components';

const SignUpView = props => {
  const { SIGN_UP, onChangeValueUserName } = props;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text content={SIGN_UP.TITLE} textStyle={styles.titleHeader} />
          <Text content={SIGN_UP.CONTENT} textStyle={styles.contentHeader} />
        </View>
        <View style={styles.bodyContainer}>
          <InputField
            showPass
            clearPress
            title={SIGN_UP.USER_NAME}
            onChangeValueInput={onChangeValueUserName}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpView;
