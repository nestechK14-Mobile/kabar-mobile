import { View, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import styles from './SignIn.styles';
import { FONTS, IC_CloseEye, IC_Mail, IC_MailBox } from '@/assets';
import CustomInputField from '@/components/common/customInputField';
import { Image } from 'react-native-svg';
import { openEye } from '@/components';
import { Button } from '@/components';

const SignInView = props => {
  const { navigateToTab } = props;

  return (
    <View style={styles.container}>
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
      <View style={{ flexDirection: 'row' }}>
        <Text style={[FONTS.REGULAR, { fontsize: 14, fontWeight: 400 }]}>User Name</Text>
        <Text style={{ color: 'red', justifyContent: 'flex-end' }}>*</Text>
      </View>
      <View style={{ backgroundColor: 'red' }}>
        <IC_MailBox />
      </View>

      <TextInput
        style={{ borderRadius: 8, borderColor: 'blue', borderWidth: 2 }}
        placeholder="tài khoản"
      />
      <View style={{ flexDirection: 'row' }}>
        <Text style={[FONTS.REGULAR, { fontsize: 14, fontWeight: 400 }]}>Password</Text>
        <Text style={{ color: 'red', justifyContent: 'flex-end' }}>*</Text>
      </View>

      <TextInput
        style={{ borderRadius: 8, borderColor: 'blue', borderWidth: 2 }}
        placeholder="mật khẩu"
        inlineImageRight="../../assets/icons/IC_CloseEye.js"
      />
      <TouchableOpacity>
        <IC_CloseEye />
      </TouchableOpacity>
      <Button onPress={navigateToTab}>
        <Text>Navigate to tab</Text>
      </Button>
    </View>
  );
};

export default SignInView;
