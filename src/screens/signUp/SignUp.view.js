import React from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import styles from './SignUp.styles';
import { Button, InputField, Text } from '@/components';
import { IC_WarningInput } from '@/assets';

const SignUpView = props => {
  const { onChangeValueUserName, handleSignUp, errorText, SIGN_UP } = props;
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <Text content={SIGN_UP.TITLE} textStyle={styles.titleHeader} />
          <Text content={SIGN_UP.CONTENT} textStyle={styles.contentHeader} />
        </View>
        <View style={styles.bodyContainer}>
          <InputField
            clearPress
            containerStyle={styles.spacingInput}
            title={SIGN_UP.USER_NAME}
            onChangeValueInput={onChangeValueUserName}
          />
          <InputField
            showPass
            clearPress
            containerStyle={styles.spacingInput}
            title={SIGN_UP.PASSWORD}
            onChangeValueInput={onChangeValueUserName}
          />
          <InputField
            showPass
            clearPress
            containerStyle={styles.spacingInput}
            title={SIGN_UP.PASSWORD_CONFIRMATION}
            onChangeValueInput={onChangeValueUserName}
          />
          <InputField
            clearPress
            containerStyle={styles.spacingInput}
            title={SIGN_UP.FULL_NAME}
            onChangeValueInput={onChangeValueUserName}
          />
          {errorText && (
            <View style={styles.errorContainer}>
              <IC_WarningInput />
              <Text content={errorText} textStyle={styles.errorContentStyle} />
            </View>
          )}
        </View>
        <View style={styles.bottomContainer}>
          <Button style={styles.buttonSignUp} onPress={handleSignUp}>
            <Text content={'SignUp'} textStyle={styles.titleSignUp} />
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpView;
