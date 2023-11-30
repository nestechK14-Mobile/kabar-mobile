import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './SignIn.styles';
import { FONTS, IC_CloseEye, IC_MailBox } from '@/assets';
import { Button } from '@/components';

const SignInView = props => {
  const { navigateToTab, SIGN_IN_LABEL } = props;
  console.log('SIGN_IN_LABEL', SIGN_IN_LABEL);

  return (
    <View style={styles.container}>
      <Button onPress={navigateToTab}>
        <Text>Navigate to tab</Text>
      </Button>
      <Text style={[styles.textdefault, { color: 'black', fontSize: 48, fontWeight: '700' }]}>
        Hello
      </Text>
      <Text style={[FONTS.SEMIBOLD, { color: 'blue', fontSize: 48, fontWeight: '700' }]}>
        Again
      </Text>
      <Text style={[styles.textdefault, { color: 'black', fontSize: 20, fontWeight: '400' }]}>
        welcome back you've
      </Text>
      <Text style={[styles.textdefault, { color: 'black', fontSize: 20, fontWeight: '400' }]}>
        been missed
      </Text>
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[FONTS.REGULAR, { fontsize: 14, fontWeight: 400 }]}>User Name</Text>
          <Text style={{ color: 'red', justifyContent: 'flex-end' }}>*</Text>
        </View>
        <View>
          <IC_MailBox />
        </View>

        <TextInput
          style={{ borderRadius: 8, borderColor: 'blue', borderWidth: 2 }}
          placeholder="tài khoản"
        />
      </View>
      <View style={styles.containerInputPassword}>
        <View style={styles.containerInputPasswordLabel}>
          <Text style={styles.labelDefault}>Password</Text>
          <Text style={styles.labelRequired}>*</Text>
        </View>
        <View style={styles.containerInputPasswordBody}>
          <TextInput
            style={styles.containerInputPasswordBodyInput}
            placeholder={SIGN_IN_LABEL.PASSWORD}
            inlineImageRight="../../assets/icons/IC_CloseEye.js"
          />
          <TouchableOpacity>
            <IC_CloseEye />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerCheckBox}>
        <Text style={styles.titleCheckBox}></Text>
      </View>
    </View>
  );
};

export default SignInView;
