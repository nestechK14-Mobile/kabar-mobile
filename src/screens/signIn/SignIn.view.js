import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import styles from './SignIn.styles';
import { FONTS, IC_Back, IC_CloseEye, IC_Facebook, IC_Google, IC_MailBox } from '@/assets';
import { Button } from '@/components';
import CheckBox from '@react-native-community/checkbox';
import { scale } from '@/utils';

const SignInView = props => {
  const { navigateToTab, SIGN_IN_LABEL } = props;
  console.log('SIGN_IN_LABEL', SIGN_IN_LABEL);
  const [isCheck, setIsCheck] = useState(false);

  const [getPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button onPress={navigateToTab}>
        <Text>Navigate to tab</Text>
      </Button>
      <Text style={[styles.textDefault, { color: 'black', fontSize: 48, fontWeight: '700' }]}>
        Hello
      </Text>
      <Text style={[FONTS.SEMIBOLD, { color: 'blue', fontSize: 48, fontWeight: '700' }]}>
        Again
      </Text>
      <Text style={[styles.textDefault, { color: 'black', fontSize: 20, fontWeight: '400' }]}>
        welcome back you've
      </Text>
      <Text style={[styles.textDefault, { color: 'black', fontSize: 20, fontWeight: '400' }]}>
        been missed
      </Text>
      <View style={styles.containerInputPassword}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={[FONTS.REGULAR, { fontsize: 14, fontWeight: 400 }]}>User Name</Text>
          <Text style={{ color: 'red', justifyContent: 'flex-end' }}>*</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
            borderWidth: scale(1),
            paddingHorizontal: scale(8),
            borderRadius: scale(6),
            borderColor: 'green'
          }}>
          <TextInput
            style={{
              width: '50%',
              fontSize: scale(14),
              fontFamily: FONTS.REGULAR,
              color: 'blue'
            }}
            placeholder="tài khoản"
            inlineImageLeft="../../assets/icons/IC_MailBox.js"
          />
          <TouchableOpacity style={{ justifyContent: 'space-between' }}>
            <IC_MailBox />
          </TouchableOpacity>
        </View>
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
            // inlineImageRight="../../assets/icons/IC_CloseEye.js"

            secureTextEntry={getPasswordVisible ? false : true}
          />

          <TouchableOpacity
            onPress={() => {
              setPasswordVisible(!getPasswordVisible);
            }}>
            {getPasswordVisible ? (
              <IC_CloseEye
                style={{
                  position: 'absolute',
                  right: 0,
                  marginBottom: 30
                }}
                resizeMode="contain"
              />
            ) : (
              <IC_Back
                style={{
                  position: 'absolute',
                  marginBottom: 30,
                  right: 0
                }}
                resizeMode="contain"
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.containerCheckBox}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <CheckBox
            disabled={false}
            value={isCheck}
            onValueChange={() => setIsCheck(!isCheck)}
            tintColors={{ true: 'blue' }}
          />
          <Text style={styles.textDefault}>Remember me</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigateToTab()}>
            <Text style={[styles.textDefault, { color: 'blue' }]}>Forget Password</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonLogin}>
        <Text style={(styles.textDefault, { fontWeight: '600', color: 'white', fontSize: 16 })}>
          Login
        </Text>
      </TouchableOpacity>
      <View style={{ marginTop: 10, alignItems: 'center' }}>
        <Text style={(styles.textDefault, { fontWeight: '400', fontSize: 14 })}>
          or continue with
        </Text>
      </View>
      <View style={styles.containerBtnFbGg}>
        <TouchableOpacity style={styles.btnFbGg}>
          <IC_Facebook style={{ marginRight: 10 }} />
          <Text style={(styles.textDefault, { fontWeight: '600', fontSize: 16 })}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFbGg}>
          <IC_Google style={{ marginRight: 10 }} />
          <Text style={(styles.textDefault, { fontWeight: '600', fontSize: 16 })}>Google</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerSignup}>
        <Text>don't have an account ?</Text>
        <TouchableOpacity>
          <Text style={(styles.textDefault, { color: 'blue', fontWeight: '500' })}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInView;
